import React from 'react'
import {
  Search,
  Filter,
  MoreLike,
  Edit,
} from "@/global/Icons";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";


const SearchFilterAndCo = ({inputProps={},filterButtonProps={},editProps={},moreLikeProps={}}) => {
  return (
       <div className="py-1 px-4 mt-2 rounded-[7px] flex justify-between border border-border">
        <Input
          className="w-[20rem]"
          {...inputProps}
        >
          <Search />
        </Input>
        <div className="flex items-center gap-2">
          <Button
          {...filterButtonProps}
          className="mr-2" variant="ghost">
            <Filter />
            <p>Filter</p>
          </Button>
          <Button
          {...editProps}
          className="bg-[#EFEFEF] " size="sm" variant="ghost">
            <Edit />
          </Button>
          <Button
          {...moreLikeProps}
          size="sm" className="py-2" variant="ghost">
            <MoreLike />
          </Button>
        </div>
    </div>
  )
}

export default SearchFilterAndCo
