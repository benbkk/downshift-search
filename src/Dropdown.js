import React from 'react'
import { Menu, Item } from './Styles'

import matchSorter from "match-sorter";

const advancedFilter = (theItems, value) => {
  return matchSorter(theItems, value, {
    keys: ["name"]
  });
};

const Dropdown = ({
  items, 
  inputValue,
  highlightedIndex,
  selectedItem,
  getItemProps,
  itemToString
  }) => (
    <Menu>
      {(inputValue
        ? advancedFilter(items, inputValue) 
        : items).map(
            (item, index) => (
              <Item
              key={item.id}
              {...getItemProps({
                item,
                index,
                isActive: highlightedIndex === index,
                isSelected: selectedItem === item
              })}
              > 
                {itemToString(item)}
              </Item>
        )
      )}
    </Menu>
  )

export default Dropdown