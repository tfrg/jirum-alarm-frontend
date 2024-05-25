import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import KeywordInputChip from './components/KeywordInputChip';
import KeywordResult from './components/KeywordResult';

const KeywordPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-2">
        <KeywordInputChip />
        <KeywordResult />
      </div>

      <div>
        <h1 className="text-black">1.부정적인지 긍정적인지 선택</h1>
        <button className="mr-3 inline-flex items-center justify-center bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          부정
        </button>
        <button className="inline-flex items-center justify-center bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
          긍정
        </button>
        <h1 className="text-black">
          2. 대표 키워드를 선택(현재 등록되어 있는 대표 키워드 리스트를 보고 선택) 또는 입력을
          해주세요
        </h1>
        <div>
          <button className="inline-flex items-center justify-center bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            대표 키워드 선택
          </button>
          <div className="mt-3"></div>
          <input
            type="text"
            placeholder="대표 키워드 입력"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <h1 className="text-black">3.추가할 유의어를 등록해주세요</h1>
        <div>
          <input
            type="text"
            placeholder="유의어 제거"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
        <h1 className="text-black">4.제외할 유의어를 등록해주세요</h1>
        <div>
          <input
            type="text"
            placeholder="유의어 입력"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default KeywordPage;
