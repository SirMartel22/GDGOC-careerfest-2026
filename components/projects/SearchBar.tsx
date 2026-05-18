"use client";

import React from 'react';

export const SearchBar: React.FC<{
	value: string;
	onChange: (v: string) => void;
	onClear?: () => void;
	count?: number;
}> = ({ value, onChange, onClear, count }) => {
	return (
		<div className="flex items-center gap-4">
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Search projects by title, builder, or keyword..."
				className="flex-1 px-4 py-3 rounded-lg bg-white border border-black text-black placeholder:text-zinc-500"
			/>

			<div className="text-sm text-zinc-600">{typeof count === 'number' ? `Showing ${count}` : ''}</div>

			{value && (
				<button onClick={() => { onClear?.(); onChange(''); }} className="text-sm text-zinc-700">Clear</button>
			)}
		</div>
	);
};

export default SearchBar;

