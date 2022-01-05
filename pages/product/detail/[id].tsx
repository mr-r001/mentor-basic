import { useRouter } from "next/router";

const Detail = () => {
    const { query, locale } = useRouter();
    console.log(locale);
    return <div></div>;
};

export default Detail;
