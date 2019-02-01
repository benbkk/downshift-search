import React from "react";
import Downshift from "downshift";
import Dropdown from './Dropdown'
import SearchResults from './SearchResults'
import { DropdownBox } from './Styles'

import {
  Input,
  Error,
  ControllerButton,
  XIcon,
  ArrowIcon
} from "./Styles";

const Search = ({ items, itemToString, error, ...rest }) => (
  <Downshift itemToString={itemToString} {...rest}>
    {({
      getRootProps,
      getInputProps,
      getButtonProps,
      getItemProps,
      isOpen,
      clearSelection,
      selectedItem,
      inputValue,
      highlightedIndex
    }) => (
        <div>  
          <DropdownBox getRootProps={'innerRef'}>
            <Input {...getInputProps({
              isOpen,
              placeholder: "Find a Star Wars character"
            })} />
            {selectedItem ? (<ControllerButton css={{ paddingTop: 4 }} onClick={clearSelection} aria-label="clear selection">
              <XIcon />
            </ControllerButton>) : (<ControllerButton {...getButtonProps}>
              <ArrowIcon isOpen={isOpen} />
            </ControllerButton>)}
            
            {!isOpen ||  error
              ? null
              : (
                  <Dropdown 
                    items={items}
                    getItemProps={getItemProps}
                    itemToString={itemToString}
                    inputValue={inputValue}
                    highlightedIndex={highlightedIndex}
                  />
              )
            }
        </DropdownBox>
        {error && inputValue && <Error css={{ marginTop: 20 }}>{error}</Error>}
        <SearchResults items={items} inputValue={inputValue} itemToString={itemToString} highlightedIndex={highlightedIndex} getItemProps={getItemProps} />
      </div>
      )}
  </Downshift>
);

export default Search;
