import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListService } from "../../redux/users/user.thunk";
import DataTable from "react-data-table-component";
import "./home.style.css";
import CustomButton from "../../components/custom-button/customButton";
import { useNavigate } from "react-router";
import { clearSessionStorage } from "../../utils/storage.utils";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state?.users);
  const [pageNumber, setPageNumber] = useState(1);

  const columns = useMemo(() => {
    return [
      {
        name: "",
        selector: (row) => <img src={row?.avatar} alt={row?.first_name} />,
      },
      {
        name: "Name",
        selector: (row) => `${row?.first_name} ${row?.last_name}`,
      },
      {
        name: "Email",
        selector: (row) => row?.email,
      },
    ];
  }, []);

  const handlePageChange = (page) => {
    dispatch(getUserListService({ pageNumber: page }));
  };

  const handleLogoutClick = (event) => {
    clearSessionStorage();
    navigate("/login");
  };

  return (
    <div className="home-contianer">
      <div className="home-header">
        <h3>Welcome User!</h3>
        <CustomButton onClick={handleLogoutClick}>Logout</CustomButton>
      </div>
      <DataTable
        columns={columns}
        data={users?.userList}
        pagination
        onChangePage={handlePageChange}
        paginationServer
        progressPending={users?.loading}
        paginationTotalRows={users?.total}
        paginationPerPage={users?.per_page}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
      />
    </div>
  );
}

export default Home;
