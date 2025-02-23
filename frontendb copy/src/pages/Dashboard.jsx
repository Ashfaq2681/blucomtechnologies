import axios from "axios";
import { useRef, useState } from "react";

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(""); // State for the title
  const [description, setDescription] = useState(null);
  const [savedImages, setSavedImages] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [fileSizeWarning, setFileSizeWarning] = useState(false);
  const [duplicateImageError, setDuplicateImageError] = useState(false);
  const [successImageUpload, setSuccessImageUpload] = useState(false);
  const [failImagedUpload, setFailImagedUpload] = useState(false);
  const [noSavedImages, setNoSavedImages] = useState(false);
  const [maxImages, setMaxImages] = useState(false);
  const fileInputRef = useRef(null);

  const onFileSelect = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const validImages = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;

      if (files[i].size > 2000000) {
        setFileSizeWarning(true);
      } else if (!images.some((img) => img.name === files[i].name)) {
        setFileSizeWarning(null);
        if (images.length < 1) {
          setMaxImages(false);
          setNoSavedImages(false);
          validImages.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            size: files[i].size,
            file: files[i], // Store the actual File object here
          });
        } else {
          setMaxImages(true);
        }
      }
    }

    setImages((prevImages) => [...prevImages, ...validImages]);
  };

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((el, i) => i !== index));
    setSelectImage(null);
  };

  const convertBytesToMB = (value) => {
    let toMB = value / 1024 ** 2;
    let reducedDecimals = toMB.toFixed(3);
    return reducedDecimals;
  };

  const upload = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      setNoSavedImages(true);
      return;
    }

    setSavedImages({ images, title, description });

    const formData = new FormData();
    formData.append("title", title); // Append title
    formData.append("description", description); // Append description

    images.forEach((image) => {
      formData.append("file", image.file); // Append each file directly from images
    });

    try {
      await axios.post(
        "http://localhost:4000/api/user/uploadarticle",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessImageUpload(true);
      setFailImagedUpload(false);
    } catch (error) {
      setFailImagedUpload(true);
      setSuccessImageUpload(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F9FAFB] w-full h-auto ">
      {/* Warnings and success messages */}
      {fileSizeWarning && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/warning.png"
            className="w-10 h-10"
            alt="warning"
          />
          File size exceeds 6mb
        </p>
      )}
      {maxImages && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/warning.png"
            className="w-10 h-10"
            alt="warning"
          />
          Maximum 1 image allowed
        </p>
      )}
      {duplicateImageError && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/warning.png"
            className="w-10 h-10"
            alt="warning"
          />
          Image already added. Please select another image
        </p>
      )}
      {noSavedImages && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/warning.png"
            className="w-10 h-10"
            alt="warning"
          />
          Please select an image to upload
        </p>
      )}
      {successImageUpload && (
        <p className="bg-green-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/checkmark.png"
            className="w-10 h-10"
            alt="checkmark"
          />
          Article uploaded successfully
        </p>
      )}
      {failImagedUpload && (
        <p className="bg-red-300 p-5 flex flex-row items-center gap-4 my-5 md:my-16 mx-5 md:mx-10 rounded-xl text-[20px]">
          <img
            src="./header/warning.png"
            className="w-10 h-10"
            alt="warning"
          />
          Failed to upload article. Please try again
        </p>
      )}
      <div className="pt-5 md:mt-16 mx-5 md:mx-20">
        <div className="rounded-xl border border-[#E1E6EF] bg-gray-100 flex flex-row flex-wrap gap-10 p-5 md:p-16 ">
          <div className="rounded-xl border border-[#E1E6EF] bg-white p-5 md:p-10 flex flex-col gap-10 justify-start items-start">
            <form className="w-full lg:w-[550px]">
              <p className="text-[36px] font-bold text-[#727272]] ">
                Add New Article
              </p>
              <div className="flex flex-col gap-5 lg:gap-10 w-full my-3">
                {/* Title input field */}
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article Title"
                  className="inputContact my-3 w-full "
                />
                {/* Description input field */}
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  name="contactMessage"
                  id="contactMessage"
                  className="inputContact my-3 w-full"
                  placeholder="Type the article description here"
                  rows={5}
                />
                <input
                  type="file"
                  name="file"
                  multiple
                  ref={fileInputRef}
                  onChange={onFileSelect}
                  className="hidden"
                />
                <div className="w-full h-auto flex flex-row justify-center md:justify-start items-start flex-wrap mb-5 gap-5 px-5">
                  {images.length !== 0 ? (
                    images.map((image, index) => (
                      <div className="w-[200px] relative text-center" key={index}>
                        <img
                          src="./header/bin.png"
                          className="absolute w-8 h-8 top-4 right-[15px] text-[40px] cursor-pointer text-[#4A16D8]"
                          onClick={() => deleteImage(index)}
                          alt="Delete"
                        />
                        <img
                          onClick={() => setSelectImage(image)}
                          className={`${
                            selectImage && selectImage.name === image.name
                              ? "border-8 border-gray-300"
                              : ""
                          } cursor-pointer w-full h-[200px] rounded-lg object-cover`}
                          src={image.url}
                          alt={image.name}
                        />
                        <span className="flex flex-row justify-center gap-2 font-bold mt-2">
                          {convertBytesToMB(image.size)}
                          <p>MB</p>
                        </span>
                      <button
                        onClick={upload}
                        className="px-8 py-1 rounded-full bg-[#4A16D8] text-white text-[24px] mt-5 mb-7"
                        >
                        Upload
                        </button>
                    </div>
                  ))
                ) : (
                  <div className="mx-auto mt-10 text-center">
                    <span className="text-[24px] mx-auto">
                    Select your image{" "}
                      <p
                        onClick={selectFiles}
                        className="text-[#4A16D8] cursor-pointer"
                      >
                        Browse
                      </p>
                    </span>
                  </div>
                )}
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

