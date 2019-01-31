import React from "react";
import Downshift from "downshift";
import matchSorter from "match-sorter";

const advancedFilter = (theItems, value) => {
  return matchSorter(theItems, value, {
    keys: ["name"]
  });
};

import {
  Item,
  Input,
  Menu,
  onAttention,
  Error,
  ControllerButton,
  XIcon,
  ArrowIcon
} from "./Styles";

const Search = ({ items, itemToString, error, ...rest }) => (
  <Downshift itemToString={itemToString} {...rest}>
    {({
      getInputProps,
      getButtonProps,
      getItemProps,
      isOpen,
      toggleMenu,
      clearSelection,
      selectedItem,
      inputValue,
      highlightedIndex
    }) => (
      <div>
        <div position="relative" css={{ paddingRight: "1.75em" }}>
          <Input
            {...getInputProps({
              isOpen,
              placeholder: "Find a Star Wars character"
            })}
          />
          {selectedItem ? (
            <ControllerButton
              css={{ paddingTop: 4 }}
              onClick={clearSelection}
              aria-label="clear selection"
            >
              <XIcon />
            </ControllerButton>
          ) : (
            <ControllerButton {...getButtonProps()}>
              <ArrowIcon isOpen={isOpen} />
            </ControllerButton>
          )}
        </div>
        {!isOpen || error ? null : (
          <Menu>
            {(inputValue ? advancedFilter(items, inputValue) : items).map(
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
        )}
        {error ? <Error css={{ marginTop: 20 }}>{error}</Error> : null}
      </div>
    )}
  </Downshift>
);

export default Search;
