import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { imageUpload } from "../../api/imageupload";
import Loader from "../../components/shared/Loader";
import SpinnerMini from "../../components/shared/SpinnerMini";
import useContestById from "../../hooks/useContestById";
import { updateContest } from "../../api/contest";

const UpdateContest = () => {
  const { id } = useParams();
  const { contest, isLoading, refetch } = useContestById(id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: contest?.title,
      description: contest?.description,
      instruction: contest?.instruction,
      type: contest?.type,
    },
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(contest?.image);
  const { state } = useLocation();

  const from = state?.from?.pathname || "/dashboard";

  if (isLoading) return <Loader />;

  const onSubmit = async (data) => {
    try {
      // save the contest to the database
      const res = await updateContest(contest._id, {
        ...data,
        image,
        priceMoney: parseFloat(data.prizeMoney),
        entryFee: parseFloat(data.entryFee),
      });

      if (res) {
        toast.success("Contest updated");
        refetch();
        navigate(from);
      }
    } catch (error) {
      toast.error(error?.message || "Error updating contest");
    }
  };

  const handleImageChange = async (e) => {
    try {
      const imageUrl = await imageUpload(e.target.files[0]);
      setImage(imageUrl);
    } catch (error) {
      toast.error(error?.message || "Error uploading image");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl mx-auto p-8 bg-white space-y-4"
    >
      <div className="text-center mb-10">
        <h1 className="text-2xl text-gray-700 font-bold ">Update Contest</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
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
              required
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
              onChange={handleImageChange}
              accept="image/*"
              id="image"
            />
          </div>
          <img src={image} className="h-40 object-contain mb-2" />
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
            <option value="gaming">Gaming Contest</option>
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
            required
            rows={6}
            {...register("description", {
              required: "Contest Description is required",
            })}
          />
        </div>
        <div className="space-y-4">
          <label
            htmlFor="prizeMoney"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Price Money
          </label>
          <input
            className="input border"
            type="number"
            defaultValue={contest.priceMoney}
            required
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
            defaultValue={contest.entryFee}
            step="any"
            required
            id="entryFee"
            {...register("entryFee", {
              required: "Entry fee is required",
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
            required
            rows={6}
            {...register("instruction", {
              required: "Contest instruction is required",
            })}
          />

          <label
            htmlFor="deadline"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Deadline
          </label>
          <input
            type="date"
            className="input border"
            required
            defaultValue={new Date(contest?.deadline)
              .toISOString()
              .substring(0, 8)}
            id="deadline"
            {...register("deadline", {
              required: "Contest Deadline is required",
            })}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="btn disabled:opacity-50"
        >
          {isLoading ? <SpinnerMini /> : "Update Contest"}
        </button>
      </div>
    </form>
  );
};

export default UpdateContest;
