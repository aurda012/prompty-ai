import Image from "next/image";
const loader = "/assets/icons/loader.svg";

const Loading = () => {
  return (
    <div className="w-full flex-center">
      <Image
        src={loader}
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
