'use client';
import { TopButton } from '@/components/TopButton';
import SwipeableViews from 'react-swipeable-views';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../style/React_tabs.css';
import ProductNotFound from './ProductNotFound';
import ProductLoading from './ProductLoading';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';
import { useProductListViewModel } from '../hooks/useProductListViewModel';
import React from 'react';

const ProductList = () => {
  const {
    loading,
    activeTab,
    handleTabChange,
    isMobile,
    allCategory,
    products,
    categoriesData,
    hasNextData,
    ref,
  } = useProductListViewModel();
  return (
    <main>
      <>
        <SearchInput />
        <Tabs
          className="react-tabs__tab-list"
          forceRenderTabPanel
          selectedIndex={activeTab}
          onSelect={handleTabChange}
          defaultFocus
          disableUpDownKeys
        >
          <TabList
            className={`will-change-transform scroll-smooth overflow-x-scroll ${
              isMobile ? 'whitespace-nowrap' : ''
            }`}
          >
            {[allCategory].concat(categoriesData.categories).map((category) => (
              <React.Fragment key={category.name}>
                <Tab
                  className="hover:text-zinc-700 transition duration-200 inline-block p-2 text-zinc-400 font-bold b-0"
                  id={`profile-tab-${category.id}`}
                  data-tabs-target={`#profile-${category.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`profile-${category.id}`}
                >
                  <button>{category.name}</button>
                </Tab>
              </React.Fragment>
            ))}
          </TabList>
          {loading ? (
            <div>
              <ProductLoading />
            </div>
          ) : (
            <div className="flex">
              <SwipeableViews
                index={activeTab}
                onChangeIndex={handleTabChange}
                animateTransitions={isMobile}
                className="will-change-transform my-6"
              >
                {[allCategory].concat(categoriesData.categories).map((category, i) => (
                  <React.Fragment key={`${category.id}_${i}`}>
                    <TabPanel>
                      {products?.length === 0 ? (
                        <div className="flex min-h-[500px]">
                          <ProductNotFound />
                        </div>
                      ) : (
                        <div className="fex min-h-[500px]">
                          <div className=" item-center grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                            {products?.map((product, i) => (
                              <ProductCard key={i} product={product} />
                            ))}
                          </div>
                        </div>
                      )}
                    </TabPanel>
                  </React.Fragment>
                ))}
              </SwipeableViews>
            </div>
          )}

          <TopButton />
          {hasNextData && <div ref={ref} className="h-[48px] w-full" />}
        </Tabs>
      </>
    </main>
  );
};

export default ProductList;
