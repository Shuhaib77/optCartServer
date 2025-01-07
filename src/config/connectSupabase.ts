import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const database_connect = async () => {
  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  );
  console.log();

  if (!supabase) {
    console.log("connection failed");
  }
  try {
    const { data, error } = await supabase.from("tenant").select("*");
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default database_connect;
