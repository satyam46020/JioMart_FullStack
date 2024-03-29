import React, { useEffect} from "react";
import "./products.css";
import axios from "axios";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useToast, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Load from "../Resources/Seen.gif"
import { AddToCart } from "../redux/Cart/action";

import {
  getElectronicsError,
  getElectronicsRequest,
  getElectronicsSuccess,
} from "../redux/electronics/action";

const CurrentIndivisualData = (payload) => {
  return axios.put(
    "https://tiny-tan-termite-ring.cyclic.app/indivisualPageData",
    payload
  );
};

const getData = () => {
  return axios.get("https://tiny-tan-termite-ring.cyclic.app/electronics");
};

const sortDataByAsc = () => {
  return axios.get(
    "https://tiny-tan-termite-ring.cyclic.app/electronics?_sort=price&_order=asc"
  );
};

const sortDataByDesc = () => {
  return axios.get(
    "https://tiny-tan-termite-ring.cyclic.app/electronics?_sort=price&_order=desc"
  );
};


const filterByCategory = (param) => {
  return axios.get(
    `https://tiny-tan-termite-ring.cyclic.app/electronics?category=${param}`
  );
};

const ElectronicProducts = () => {
  const list = useSelector((store) => store.ElectronicsReducer.list);
  const isLoading = useSelector((store) => store.ElectronicsReducer.isLoading);
  const filterData = useSelector(
    (store) => store.ElectronicsReducer.filterData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleGetData = () => {
    dispatch(getElectronicsRequest());
    getData()
      .then((res) => {
        dispatch(getElectronicsSuccess(res.data));
      })
      .catch((err) => dispatch(getElectronicsError()));
  };

  const handleSortByAsc = () => {
    dispatch(getElectronicsRequest());
    sortDataByAsc().then((res) => {
      dispatch(getElectronicsSuccess(res.data));
    });
  };

  const handlesortByDesc = () => {
    dispatch(getElectronicsRequest());
    sortDataByDesc().then((res) => {
      dispatch(getElectronicsSuccess(res.data));
    });
  };

  const handleFilterData = (item) => {
    dispatch(getElectronicsRequest());
    filterByCategory(item).then((res) =>
      dispatch(getElectronicsSuccess(res.data))
    );
  };

  const resetFilters = () => {
    handleGetData();
  };

  const PostToCart = (item) => {
   dispatch(AddToCart(item)).then((res) => {
      alert("Item Added Successfully to the cart");
      toast({
        title: "Verification Reminder",
        description: `"Item Added To Cart Successfully."`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
  };

  const handleCurrentData = (item) => {
    CurrentIndivisualData(item).then((res) =>
      navigate("/indivisualPage")
    );
  };

  useEffect(() => {
    handleGetData();
  }, []);
  if (isLoading) return <Center m="150px"> <img width={"350px"} src={Load} ></img></Center>;
  return (
    <div className="productPage">
      <div className="options">
        <h3>Sort Data By: </h3>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            handleSortByAsc();
          }}
        >
          Ascending
        </button>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            handlesortByDesc();
          }}
        >
          Descending
        </button>
        <h3>Filter Data by category :</h3>
        {filterData.map((item, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => handleFilterData(item)}
          >
            {item}
          </button>
        ))}
        <h3>Reset :</h3>
        <button
          className="btn"
          style={{ textAlign: "center" }}
          onClick={() => {
            resetFilters();
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="products">
        {list &&
          list?.map((item, index) => {
            return (
              <div key={index} className="singleProduct">
                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => {
                    handleCurrentData(item);
                  }}
                />
                <h3>{item.name}</h3>
                <p>M.R.P : ₹ {item.price}</p>
                <button
                  className="btn cart-btn pos"
                  onClick={() => {
                    PostToCart(item);
                  }}
                >
                  <span>Add to cart</span> <BsFillBagPlusFill />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ElectronicProducts;
