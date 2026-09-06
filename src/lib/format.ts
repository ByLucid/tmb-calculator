const numberUnits = [
	{
		value: 1_000_000_000_000_000_000_000_000n,
		suffix: "SP",
	},
	{
		value: 1_000_000_000_000_000_000_000n,
		suffix: "SX",
	},
	{
		value: 1_000_000_000_000_000_000n,
		suffix: "QI",
	},
	{
		value: 1_000_000_000_000_000n,
		suffix: "QD",
	},
	{
		value: 1_000_000_000_000n,
		suffix: "T",
	},
	{
		value: 1_000_000_000n,
		suffix: "B",
	},
	{
		value: 1_000_000n,
		suffix: "M",
	},
	{
		value: 1_000n,
		suffix: "K",
	},
];

export function formatFull(value: bigint): string {
	return value
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatCompact(value: bigint): string {
	const absolute = value < 0n ? -value : value;

	for (const unit of numberUnits) {
		if (absolute >= unit.value) {
			const whole = absolute / unit.value;
			const remainder = absolute % unit.value;
			const decimals = (remainder * 1000n) / unit.value;

			let decimalString = decimals
				.toString()
				.padStart(3, "0")
				.replace(/0+$/, "");

			const sign = value < 0n ? "-" : "";

			return decimalString
				? `${sign}${whole}.${decimalString}${unit.suffix}`
				: `${sign}${whole}${unit.suffix}`;
		}
	}

	return formatFull(value);
}
