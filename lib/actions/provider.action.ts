"use server";

import { Models, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
// import { parseStringify } from "../utils";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_HEALTHPROVIDERS_COLLECTION_ID: HEALTHPROVIDERS_COLLECTION_ID,
} = process.env;

export async function getSelectOptions(): Promise<Array<string[]> | undefined> {
  const uniqueTypes: Set<string> = new Set();
  const uniqueStates: Set<string> = new Set();
  const documents: Models.Document[] = [];
  const limit = 100;
  let offset = 0;
  let hasMore = true;
  try {
    const { database } = await createAdminClient();

    while (hasMore) {
      const result = await database.listDocuments(
        DATABASE_ID!,
        HEALTHPROVIDERS_COLLECTION_ID!,
        [Query.limit(limit), Query.offset(offset)]
      );

      documents.push(...result.documents);

      if (result.documents.length < limit) {
        hasMore = false;
      } else {
        offset += limit;
      }
    }

    // Extract unique types and states
    documents.forEach((doc) => {
      uniqueTypes.add(doc.type);
      uniqueStates.add(doc.state);
    });

    // Convert sets to arrays
    const uniqueTypesArray = Array.from(uniqueTypes).sort();
    const uniqueStatesArray = Array.from(uniqueStates).sort();

    // return parseStringify([uniqueStatesArray, uniqueTypesArray]);
    return [uniqueStatesArray, uniqueTypesArray];
  } catch (error) {
    console.log(error);
  }
}

export async function getProviders(
  // input: string,
  // location: string,
  // provider: string,
  // page: number
  searchParams?: {
    input?: string;
    location?: string;
    provider?: string;
    page?: string;
  }
): Promise<Models.DocumentList<Models.Document> | undefined> {
  const page = searchParams?.page ? searchParams.page : "1";
  const limit = 25;
  const offset = (+page - 1) * limit;
  try {
    const { database } = await createAdminClient();

    const result = await database.listDocuments(
      DATABASE_ID!,
      HEALTHPROVIDERS_COLLECTION_ID!,
      [
        Query.contains("name", searchParams?.input ? searchParams.input : ""),
        Query.contains(
          "state",
          searchParams?.location ? searchParams.location : ""
        ),
        Query.contains(
          "type",
          searchParams?.provider ? searchParams.provider : ""
        ),
        Query.limit(limit),
        Query.offset(offset),
      ]
    );

    return result;
    // return parseStringify(result);
  } catch (error) {
    console.log(error);
  }
}

export async function getTotalPages() {
  try {
    const { database } = await createAdminClient();

    const result = await database.listDocuments(
      DATABASE_ID!,
      HEALTHPROVIDERS_COLLECTION_ID!
    );

    // return parseStringify(result.total);
    return result.total;
  } catch (error) {
    console.log(error);
  }
}
