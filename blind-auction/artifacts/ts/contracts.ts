/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractFactory } from "@alephium/web3";

import { Auction } from ".";

let contracts: Contract[] | undefined = undefined;
export function getContractByCodeHash(codeHash: string): Contract {
  if (contracts === undefined) {
    const factories: ContractFactory<any>[] = [Auction];
    contracts = factories.map((f) => f.contract);
  }
  const allContracts = contracts;
  const c = allContracts.find(
    (c) => c.codeHash === codeHash || c.codeHashDebug === codeHash
  );
  if (c === undefined) {
    throw new Error("Unknown code with code hash: " + codeHash);
  }
  return c;
}