/**
 * Operator Aliases
 */
export interface OperatorAliases {
  $eq: Symbol;
  $ne: Symbol;
  $gte: Symbol;
  $gt: Symbol;
  $lte: Symbol;
  $lt: Symbol;
  $not: Symbol;
  $in: Symbol;
  $notIn: Symbol;
  $is: Symbol;
  $like: Symbol;
  $notLike: Symbol;
  $iLike: Symbol;
  $notILike: Symbol;
  $regexp: Symbol;
  $notRegexp: Symbol;
  $iRegexp: Symbol;
  $notIRegexp: Symbol;
  $between: Symbol;
  $notBetween: Symbol;
  $overlap: Symbol;
  $contains: Symbol;
  $contained: Symbol;
  $adjacent: Symbol;
  $strictLeft: Symbol;
  $strictRight: Symbol;
  $noExtendRight: Symbol;
  $noExtendLeft: Symbol;
  $and: Symbol;
  $or: Symbol;
  $any: Symbol;
  $all: Symbol;
  $values: Symbol;
  $col: Symbol;
  $raw: Symbol;  // deprecated remove by v5.0
}

declare const Aliases: OperatorAliases;

/**
 * Operator symbols to be used when querying data
 *
 */
export interface Operators {

  Aliases: OperatorAliases;

  eq: Symbol;
  ne: Symbol;
  gte: Symbol;
  gt: Symbol;
  lte: Symbol;
  lt: Symbol;
  not: Symbol;
  is: Symbol;
  in: Symbol;
  notIn: Symbol;
  like: Symbol;
  notLike: Symbol;
  iLike: Symbol;
  notILike: Symbol;
  regexp: Symbol;
  notRegexp: Symbol;
  iRegexp: Symbol;
  notIRegexp: Symbol;
  between: Symbol;
  notBetween: Symbol;
  overlap: Symbol;
  contains: Symbol;
  contained: Symbol;
  adjacent: Symbol;
  strictLeft: Symbol
  strictRight: Symbol;
  noExtendRight: Symbol;
  noExtendLeft: Symbol;
  and: Symbol;
  or: Symbol;
  any: Symbol;
  all: Symbol;
  values: Symbol;
  col: Symbol;
  placeholder: Symbol;
  join: Symbol;
  raw: Symbol; // deprecated remove by v5.0
}

export const Op: Operators;
