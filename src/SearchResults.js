import React from 'react'
import matchSorter from 'match-sorter'
import { Item } from './Styles'

const advancedFilter = (theItems, value) => {
  return matchSorter(theItems, value, {
    keys: ["name"]
  });
};

const SearchResults = ({items, 
  inputValue,
  highlightedIndex,
  selectedItem,
  getItemProps,
  itemToString
}) => (
  <div className='search-results'>
    <ul>
      {(inputValue
        ? advancedFilter(items, inputValue) 
        : items).map(
            (item, index) => (
              <li
              key={item.id}
              {...getItemProps({
                item,
                index,
                isActive: highlightedIndex === index,
                isSelected: selectedItem === item
              })}
              > 
                {itemToString(item)}
              </li>
        )
      )}
      </ul>
  </div>
)

export default SearchResults