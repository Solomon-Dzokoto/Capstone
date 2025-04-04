import React from "react";
import { Search, Filter, MoreLike, Edit } from "@global/Icons";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";

const SearchFilterAndCo = ({
	inputProps = {},
	filterButtonProps = {},
	editProps = {},
	moreLikeProps = {},
}) => {
	return (
		<div className="py-1 px-4 mt-2 flex-col sm:flex-row rounded-[7px] flex justify-between dark:bg-dark-surface  border dark:border-border border-border ">
			<Input className="w-[20rem]" {...inputProps}>
				<Search />
			</Input>
			<div className="flex items-center gap-2">
				<Button {...filterButtonProps} className="mr-2" variant="ghost">
					<Filter className="bg-[#EFEFEF] dark:bg-dark-surface" />
					<p>Filter</p>
				</Button>
				<Button {...editProps} className=" " size="sm" variant="ghost">
					<Edit />
				</Button>
				<Button {...moreLikeProps} size="sm" className="py-2" variant="ghost">
					<MoreLike />
				</Button>
			</div>
		</div>
	);
};

export default SearchFilterAndCo;
