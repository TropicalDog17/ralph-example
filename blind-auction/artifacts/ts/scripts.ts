/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as AuctionEndScriptJson } from "../AuctionEnd.ral.json";
import { default as NewBidScriptJson } from "../NewBid.ral.json";
import { default as RevealScriptJson } from "../Reveal.ral.json";

import { Bid, AllStructs } from "./types";

export const AuctionEnd = new ExecutableScript<{ auction: HexString }>(
  Script.fromJson(AuctionEndScriptJson, "", AllStructs)
);

export const NewBid = new ExecutableScript<{
  auction: HexString;
  blindedBid: HexString;
  amount: bigint;
}>(Script.fromJson(NewBidScriptJson, "", AllStructs));

export const Reveal = new ExecutableScript<{
  auction: HexString;
  values: HexString;
  fakes: HexString;
  secrets: HexString;
}>(Script.fromJson(RevealScriptJson, "", AllStructs));