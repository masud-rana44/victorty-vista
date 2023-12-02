import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { imageUpload } from "../../api/imageupload";
import { saveContest } from "../../api/contest";
import Loader from "../../components/shared/Loader";
import SpinnerMini from "../../components/shared/SpinnerMini";

const AddContest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { userData, isLoading: isUserLoading } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  if (isUserLoading && !userData) return <Loader />;

  const credits = userData?.credits || 0;

  const onSubmit = async (data) => {
    if (credits < 50) return toast.error("You don't have enough credits");

    setIsLoading(true);
    try {
      // upload image
      const imageUrl = await imageUpload(data.image[0]);

      // save the contest to the database
      const res = await saveContest({
        ...data,
        image: imageUrl,
        priceMoney: parseFloat(data.prizeMoney),
        entryFee: parseFloat(data.entryFee),
        creator: userData._id,
      });

      if (res) {
        toast.success("Contest added successfully");
        navigate("/dashboard/creator/contests");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Error adding contest"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl mx-auto p-8 bg-white space-y-4"
    >
      <div className="text-center mb-10">
        <h1 className="text-2xl text-gray-700 font-bold ">Add New Contest</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div>
          <div>
            <label
              htmlFor="contestName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              className="input border"
              type="text"
              id="contestName"
              {...register("title", {
                required: "Title is required",
              })}
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Image
            </label>
            <input
              className="input border"
              type="file"
              accept="image/*"
              id="image"
              {...register("image", {
                required: "Image is required",
              })}
            />
          </div>

          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Type
          </label>
          <select className="input border" id="type" {...register("type")}>
            <option value="business">Business Contest</option>
            <option value="medical">Medical Contest</option>
            <option value="writing">Article Writing</option>
            <option value="gaming">Gaming</option>
          </select>

          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            className="input border"
            id="description"
            rows={6}
            {...register("description", {
              required: "Contest Description is required",
              validate: (value) =>
                value.length >= 50 ||
                "Description must be at least 50 characters",
            })}
          />
        </div>
        <div>
          <label
            htmlFor="prizeMoney"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Price Money
          </label>
          <input
            className="input border"
            type="number"
            step="any"
            id="priceMoney"
            {...register("prizeMoney", {
              required: "Price money is required",
              validate: (value) =>
                value > 0 || "Price money must be greater than 0",
            })}
          />

          <label
            htmlFor="entryFee"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Joining Fee
          </label>
          <input
            className="input border"
            type="number"
            step="any"
            id="entryFee"
            {...register("entryFee", {
              required: "Entry fee is required",
              validate: (value) =>
                value > 0 || "Entry fee must be greater than 0",
            })}
          />

          <label
            htmlFor="instruction"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Instruction
          </label>
          <textarea
            className="input border"
            id="instruction"
            rows={6}
            {...register("instruction", {
              required: "Contest instruction is required",
              validate: (value) =>
                value.length >= 20 ||
                "Instructions must be at least 20 characters",
            })}
          />

          <label
            htmlFor="deadline"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Deadline
          </label>
          <input
            type="datetime-local"
            className="input border"
            id="deadline"
            {...register("deadline", {
              required: "Contest Deadline is required",
              validate: (value) =>
                new Date(value) > new Date() ||
                "Deadline must be greater than today",
            })}
          />
        </div>
      </div>
      <div>
        <button disabled={isLoading} className="btn disabled:opacity-50">
          {isLoading ? <SpinnerMini /> : "Add Contest"}
        </button>
      </div>
    </form>
  );
};

export default AddContest;
