const NftBox = (props) => {
  return (
    <div
      className={`flex flex-col items-start justify-center ${props.color} w-[360px] h-[180px] rounded-lg border-[1.5px] border-black basic-shadow`}
    >
      <div className="font-bold text-headline tracking-tighter ml-4 mb-2">
        {props.title}
      </div>
      <div className="ml-4">
        {props.detail1}
        <br />
        {props.detail2}
      </div>
    </div>
  );
};

export default NftBox;
