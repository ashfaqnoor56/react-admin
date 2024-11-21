import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [listingType, setListingType] = useState("others");
  const [apiData, setAPIData] = useState([]);
  const [description, setDescription] = useState("")
  // console.log(apiData);


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi", {
      image,
      
      listingType
    });
    localStorage.setItem("Name", name)
    localStorage.setItem("Price", price)
    localStorage.setItem("Image", image)
    localStorage.setItem("ImageData", imageData)
    localStorage.setItem("ListingType", listingType)
    setName("");
    setPrice("");
    setImage("");
    setImageData("");
    setDescription("");
    setListingType("others");

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file.name);
    }
  };

  const getData = () => {
    axios
      .get("https://673c367596b8dcd5f3f8edea.mockapi.io/productapi")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`https://673c367596b8dcd5f3f8edea.mockapi.io/productapi/${id}`)
      .then(() => {
        getData();
      });
  };


  return (
    <div className="container w-50 m-auto vh-100 d-flex flex-column justify-content-center">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="mt-3 mb-4">Add New Products</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {imageData && (
          <img
            src={imageData}
            alt="Selected"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="num"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            role="10"
            cols={40}
            rows={7}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select
            className="form-control"
            id="category"
            value={listingType}
            onChange={(e) => setListingType(e.target.value)}
            required
          >
            <option value="accessories">Accessories</option>
            <option value="dress">Dress</option>
            <option value="jewels">Jewels</option>
            <option value="bags">Bags</option>
            <option value="jackets">Jackets</option>
            <option value="makeup">Makeup</option>
            <option value="shoes">Shoes</option>
            <option value="others">Choose Category</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Listing
        </button>
        <button onClick={() => handleDelete("1")} className="btn btn-primary ms-3">Delete</button>
      </form>

    </div>
  );
};

export default AddProduct;
