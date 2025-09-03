export interface RootInterface {
  dataMedium: DataMedium[];
}

export interface DataMedium {
  title: string;
  date: string;
  link: string;
  image: string;
  description: string;
  tags: string[];
}
export const fetchBlogs = async (): Promise<RootInterface | undefined> => {
  try {
    const response = await fetch(
      "https://mediumpostsapi.vercel.app/api/cuzawzawmyint"
    );
    const jsonData: RootInterface = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};
