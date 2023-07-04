import NftBox from "../components/Nft_box";

const StoreMarket = () => {
  return (
    <div className="min-w-full min-h-full flex flex-col justify-center items-center ">
      <div>만료까지 남은 기간</div>
      <div className="mb-4 font-bold text-3xl">7일!</div>
      <div className="h-16"></div>
      <NftBox
        color="bg-deepYellow"
        title="만료된 NFT를 폐기해요!"
        detail1="기존에 보유하신 만료된 nft를 폐기합니다!"
        detail2=""
      />
      <div className="h-4"></div>
      <NftBox
        color="bg-purple"
        title="새로운 NFT를 구매해요!"
        detail1="만료된 nft를 폐기한 이후 구매해주세요!"
        detail2="구매 혜택: 30일 판매 수수료 면제"
      />
    </div>
  );
};

export default StoreMarket;
