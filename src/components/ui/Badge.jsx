import React from "react";
import { Close } from "../../global/Icons";
import { getFirstLetters } from "../../store/useUserDetails";

const Badge = ({ image, name, onRemove }) => {
  const deleteBadge = (e) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="flex items-start bg-blend-multiply py-1">
      <div className="flex gap-1 justify-center w-auto items-center py-2 pr-2 pl-2.5 rounded-2xl bg-neutral-100">
        {image ? (
          <img
            src={image}
            className="object-contain shrink-0 self-stretch my-auto aspect-square min-h-4 rounded-[200px] w-4"
            alt={name}
          />
        ) : (
          <span className="rounded-full size-6 text-[.6rem] flex items-center justify-center text-brown font-700 bg-[#d9e1fb]">
            {getFirstLetters(name)}
          </span>
        )}
        <span className="self-stretch my-auto text-xs font-medium">{name}</span>
        <button
          type="button"
          className="p-0.5 hover:bg-neutral-200 rounded-full transition-colors"
          onClick={deleteBadge}
        >
          <Close className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Badge;
