export type Price = {
  drink_name: string;
  prices: DrinkPrice;
};

export type DrinkPrice = {
  small?: number;
  medium?: number;
  large?: number;
  huge?: number;
  mega?: number;
  ultra?: number;
};
