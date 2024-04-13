import toast from "react-hot-toast";
import Image from "next/image";

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      const uploadPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        if (response.ok) {
          const link = await response.json();
          setLink(link);
          resolve();
        } else {
          reject();
        }
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Pic Uploaded!",
        error: "Error Uploading",
      });
    }
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={100}
          height={100}
          alt={"avatar"}
        />
      )}
      {!link && (
        <Image
        className="rounded-lg w-full h-full mb-1"
        src={'/avatar2.png'}
        width={50}
        height={50}
        alt={"avatar"}
      />
      )}

      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block w-full text-gray-700 font-semibold border text-center cursor-pointer border-gray-300 rounded-xl px-6 py-2">
          Edit
        </span>
      </label>
    </>
  );
}
