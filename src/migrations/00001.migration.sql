CREATE TABLE "organization" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "title" character varying NOT NULL,
  "email" character varying NOT NULL,
  "createdDate" TIMESTAMP(3) WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(3) with time zone,
  CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id")
);

CREATE TABLE "query_result_cache" (
  "id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL,
  "duration" integer NOT NULL,
  "query" text NOT NULL,
  "result" text NOT NULL, CONSTRAINT "PK_2bfde1a0c552566e1992b3d0642" PRIMARY KEY ("id")
);
