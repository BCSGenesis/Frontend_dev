import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import food from "../images/food.png";

import orange from "../images/orange.png";

export default function MenuStore() {
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] relative">
        <div className="flex flex-col justify-start items-center relative">
          <div className="min-w-full bg-pink-100 h-[250px] relative">
            <button className="absolute top-[44px] left-[24px]">
              <IoIosArrowBack size={24} />
            </button>
            <button className="absolute top-[44px] left-[342px]">
              <AiOutlineHome size={24} />
            </button>
            <img src={food} alt="food" />
          </div>

          <div className=" absolute top-[200px] bg-white w-[320px] h-[140px]  flex-cols justify-center items-center p-[10px] border-[2px] border-[#2D2D32] mt-2 rounded-lg shadow-md">
            <div
              className="flex justify-center font-agothic16 mt-2 "
              style={{ fontSize: "20px" }}
            >
              <input
                style={{ fontSize: "16px" }}
                className="w-146h-8 border-b-[2px] border-[#2D2D32]  px-2 rounded-tl-full rounded-bl-full"
                type="text"
                placeholder="매장명을 입력해주세요!"
              />
              <button
                className="h-8 w-14  bg-deepYellow rounded-tr-full rounded-br-full flex justify-center items-center"
                style={{ fontSize: "16px" }}
              >
                확인
              </button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <AiFillStar size={24} color="FFD84D" />
              <AiFillStar size={24} color="FFD84D" />
              <AiFillStar size={24} color="FFD84D" />
              <AiFillStar size={24} color="FFD84D" />
              <AiFillStar size={24} color="FFD84D" />
              <AiOutlineRight size={20} color="7F7F82" />
            </div>
            <div className=" flex justify-center items-center gap-2 mt-4 ">
              <div
                className="nft-style font-agothic10"
                style={{ fontSize: "14px" }}
              >
                멕시칸
              </div>
              <div
                className="nft-style font-agothic10"
                style={{ fontSize: "14px" }}
              >
                리뷰 최다
              </div>
              <div
                className="nft-style font-agothic10"
                style={{ fontSize: "14px" }}
              >
                친절한 사장님
              </div>
            </div>
          </div>

          <div className="mt-[130px]" style={{ fontSize: "20px" }}>
            <div className="font-agothic16">메뉴</div>
            <div className="font-agothic13 bg-white w-[350px] flex justify-between  items-center px-[10px] py-[15px] border-[2px] border-[#2D2D32] mt-4 rounded-lg">
              <div style={{ fontSize: "20px" }}>
                <div className="flex gap-2 items-center">
                  <div className="font-agothic16">귤</div>
                  <div
                    className="bg-deepYellow rounded-full px-[6px] py-[1px] text-white flex justify-center items-center"
                    style={{ fontSize: "16px" }}
                  >
                    사장님 추천
                  </div>
                </div>
                <div className="text-darkGray" style={{ fontSize: "16px" }}>
                  제주산
                </div>
                <div className="text-darkGray" style={{ fontSize: "16px" }}>
                  15000원
                </div>
              </div>
              <div className="relative bg-darkGray border-[4px] border-deepYellow w-[80px] h-[80px]">
                <img src={orange} alt="" />
                <div className="absolute bg-deepYellow border-[2px] border-white rounded-[5px] p-[2px] bottom-[-10px] right-[-10px]">
                  <BsPencil size={20} color="black" />
                </div>
              </div>
            </div>

            <div
              className="sticky  bottom-4 bg-white mb-4 font-agothic16 w-[350px]  flex justify-center items-center py-[20px] border-[2px] border-[#2D2D32] mt-4 rounded-lg"
              style={{ fontSize: "24px" }}
            >
              메뉴 추가
              <AiOutlinePlusSquare className="ml-2" size={24} color="purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}