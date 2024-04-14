import Image from "next/image";
import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
interface Review_Data {
  id: string;
  performid: string;
  content: string;
  rate: number;
  regdt: string;
}
const Reviews = () => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const { data, isLoading, isError, error } = useQuery<Review_Data[]>(
    "mainReview",
    async () => {
      const res: AxiosResponse<Review_Data[]> = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews`
      );
      return res.data;
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{(error as Error).message}</div>;
  }
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data &&
          data?.map((el) => (
            <Link href={`/performances/${el.performid}`} key={el.id}>
              <div
                key={el.id}
                className="card group w-80 h-96 bg-white shadow-xl rounded-xl border-2 border-white hover:cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-in-out hover:text-white"
              >
                <figure>
                  <Image
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA9EAACAQMDAgQDBQUHBAMAAAABAgMABBEFEiEGMRMiQVFhcYEHFDKRoRUjUmKxM0KCwdHh8BYkU3JDksL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACMRAAICAgICAgMBAAAAAAAAAAABAhEDIRIxEyJBUTJSYQT/2gAMAwEAAhEDEQA/APYrZMtmpoGKjQttwKkg5qGKkUyN2Iwppos80/RVHBMROhpExToFJiuq0Y0ZuwooopwCUUtFYwUUUVjBRRRWMFJS0VjHJXmlFBpM0ukYST8J+VVN4vNWjt6VV3RxJn2rlzbZfD2RIrfe9XlpF4UYFU0D7ZS1XQnQICfajhilthzSb0VutqirubvWJvLco7lWK7j2Fa/WJxJBK6uo2+UqayN3O0i7XYblPp7VO05ui2P8SLHGEXG786KsUukCAKqyKBgMaKYezbCpMO6ogapcD1SFWcs+h6lzSbqWrkBKWkpRRRhaKKKJgooorGCiiisYKSlpDQMFFJmk3LWswHk1yy8VxJIImBPY01JPmPee2cCpSkl2OkLNtYBR3+FRpYPHUxYKPjgkU5GZGzKv4R3zTd5LJLH+6UMf7uO9Tko1bKLWkR0gjiukHfDYJ9qsri3jEbv2OM5qhjaRZT4+4N/eWpbTNH5Lh/IR5T7VoTVUFwbZX3lt4nPrn9K7l0SOIiZrdVIOc8cUixyXAeRWwE7D4VOt5p7vMMkg2sMHK1NVJ0UuS2iqkhids7V9qKu444LUeFLFG7A53Fc5oo8AeVjjeXinYvSuWPiKAO9NoxDFWp5KmCrRMR9rU5ndyO1RVanFeipknEfBrumVNdg08WI0d0tc5pc1WxRaKSlomCiiisYQ1yTXdNsKSfQUMl/P5+3pUWa4COdrU/OMAmq+VdxrklJ2dEIo5lvmc49qcju4mtmjduwyv+VRmt880yybWApW2ynFD5uZEUxo2FI5FRWu5o2BRyMHODUhE5FJdW25c7azlaoKihm5vori2j2xlLkHzOAP+e1NMxaNdxZq4aDBztruOJiQPepthSSHbYsucdjxU2F84G3tXMEO0YoETCTI7UUKyWFyM0UqDy0VYQcPkeuCctn3ruX8ZriqT7NEKdRqaJpVap2FolKadWoyPTqtTpkZIdozXG6jdT8hKHM0opvNdA06kBnVLXNLTWAKQ0UlBhQzKODUV05qc3rTDrXNOOysJEbw88UotMc+9SUFPDtQjCxnkZC8JV4pwxZXFPslJQ4UDm2R/uy/w021qAcqtTMUu2jwNzaIYhrtYqlBa621liN5GRxHSVJ20lU4C8iC8nlphnpyRUAYj8XpUVhti3N3zSyls6I18DyPyKcH4jTFr5zUmWNY1zupGrM2hFanlbioobmnd3FC6A4j++lDVG312Go8hXEkBqcU1F3V2r0VIRxJOaUGmA9OI1UUibR3RSZpadOxQpp1p2itJWg2NotOAUmKi6lf2umWU13fSiK3iGXd+y5OP6mhGkbsmYrnbWd1/qYaLJplwYll0y6cxzXKtnwtwBRvYr3z/wABfHUcH7V1a1faINMto5p5934SwZiCPgoU/wCKm0NwkXe2gCqrpfVn1zRLbUpLY23j7isRbJC7iFOfiAD9at63EVgKDRQaYAhpKDRSjFMXjcSkSZIqLcy5QD2pmWKWG0SUcBwTn1PzqEJi3465JJ2dkYotrN/3g+VRtb6jsNKnsLG4dmuL2UJEiDJ/EF3H4ZYfTPtUf7xDDbySzSLHGilndzgKAOST6CvG9R1uXUepL7WYwcqHgsh3AONiY+Pn3/Oq41dh4XI9z+8bXxTq3HFZrTojYWNrZGUyPbQpGxZsngYyfng1NjuO1QaofiXAmqSr+UVVQy9qnwSKcChYslof3U6h4quv72KxtXuZv7NcZ/yqLpmuwXkn7vaIyq4IP99s8D6D9aKYvFtGgTmu1O01HjkVRz3PFY/XeqUsLqGKS4VbiOVoZVDc4OCrfl/WnvWiaxuTo3St5q7zVXpV995tY7gHyyAlfiM8VNMm45FMpqiUoNOiNrtxfW+kXU+lQrPexpvihbs5HOO47jNU/R3WVr1Kjw7Da30Q89u7ZyPUr788EcEH6E31wiXNtLbzZKSoUYBipwRg8jtXi1ndSaH9o+6V3k23wt3LqFaRX8mTjueVYn1xn1p1J0PDGpJpnuO7iqHroXbdNXhsQkkiqGeBkDCeMHLx4Puu7tzVxIxzis/1tp9zqOibtOYrqFlKt1aYPJdM8Y7cqWH1oKYsI7TPINSup2srTSknzpbbrqxnlbJTOR4ZP8rZUj3wexxTFr1E3/TVxpcTTNeajMjXUxJ/slH4cnuew9goxVLq04aWVLVjFalw33Uj+xYkEr2+A59gB3FcadsijeV8DcwHNUo7G7dfB9KdITRydM6W8UbRRm1j2I2M4wMH696uC1YLoPqeyuumbKKGUs9rEsMmVK4KgY/TBrWNcgxF18wPNSeWtHJLC7LHdxSb6yttr/j211eSMIoYpzAD+IHBxn8zS6FNNa3t5p812bhVIlhLHLhWzwffBGM/Kh5g+BpGnL80V5T1L9ol7o2s3FkLdJlQ8MOCB7GitcmHwM0a3F5DpcdpeXAuJEzmQKFzx249P9qhwSNk+WmLrqq2uL+z0kx7L0R4kJHlcgfhB/X4VmbzqqabWLuzgthAy7lU5ztUAf6n86KTfZ1RX8LI3kxhu5ZyPu0pNuEYZDKfL/nXmFk9xbyLYcR38E21XJz4cilhk+hxk8jkbVI7V6Hp83364a2hHiWiIOMdmPrWG6x0+fTuoJXn/DNh0lHGeADz+v1p4OtDZF0z0zoCXRtVsbtkkmXV3VTdfeGJkMgXAPxH+p+damx0xRcRCebKFuRjGeOPWvDd7zadZ6va7IrqxlWCXYMEgANE5HsRvU8geQD2Fb/QOul1KDLxQW9wqESI+UDuvLMrcgDbk4PbB7+iZItO0LHdq6Nt1DGmlwSXFqm4KmdufX61m9R+0O30a2ELWDy32cNESFVSe3JruK/bqJpY1zDZQYLH0kf5+oHFeX9X3zXmpPPGSUV9mR2JH/P0pYq5MLhUKkegfah1KJ7K20213IZds0xA5A9B+f8ASnvs2tXXRxf3uQociAN2we7f6V57aX7al1Db3mq5mWWVS6EcYGAFA+gr1mHVU1CzQwwfuEYEYHt8K2W4xo0I/CMX9rurXEuoW2mqzrbpCJnAbAkYk4yO/AGee1Qus9MvbeS11C7RT96gjMhjHlVwgyvrjtxTP2kHxOsAxPle2jcD27r/APmtD1XrSroltZE29yk4E0uXG7Znjb7c+vwP010lQyi6Zvem5ohoWntvzGLdcH6VN1C7EFuZY+ceteX/AGea74SS6RfFiDmS2yxOP5cfrWl6j6gFtphgkeNJ5k8qbsnFSkmpcSaxW7J+oaq3/UumxRXLBApZ4hjDH0z+teefaTqgfq+5nt4/CltTGqk/3mUBgx/QfQVMiubwz6dfyBWJOzd6e2Khda6Zcv4mtbdwVljuCOxGMK3zxwf8NUi3F0yjhFbR6/LqCutvOrZinQMrjtgjIpk38dzDcfdZkeZFOATwDivJOndWvLzSF0tJ3WSxRmEX/lgPcj4ocgj+Fv5au9OSTp7SdQuJrkzSpB4jwodzKvYDPxJ7+lK4OyUYJIzf2jTWphsJoYEhutR3Xd1Gp4DYCZHz2sfz96xe5po0jHK/iapusXc+qak0114aOsSRpHGfJGoHYc8+vvySajPaXNoqTTwSojEbXZeM88H2OATj4V1JUqYvbPSOnNCuG6Zsm092VpW3zsDjIJwfyAUfT41fy9QXOkabKqMtyVHhQsrBwG92weMV5lb6vcvor6K100VhLJ4mByqn1Vsc7CecDsfQ5qPYx3dvdxwwI0MjDcCv94d85HBHx5z6GoeO2W53prR6JrGo2fT+l2UF3cvIrSCbw4/xTENuYn4Z+lMaR1NFq3UMV3pKNHI0LxPHKQN3qD8hg/nWB6nvW1O4S+CMsZXw1H8OPSm+mMjU1jjZlmYYi2naS2D2PyorCuNk3m9qrR6rqS9NX8sVzrVon314l8QEcg+39aWqmTpTW4xGl3rOj2kgQfuHJZkHsTkUVH2+y6eL6MxayzXUl51AhaOZbsIj5/CQvNSXvxDqt9qpt4pWt4I98fo5PB/yqjS5EPSaWqDLzX3iY/lC4P60unzeS6eckQ3Hkb3PfHH5V2tWST+DV6fLDI1rfaXJ92iuQyzwMw8hHqPh/tWf6x1htS0zTLKba8lozL4+OZAAByfhx9aj2upLZiNgqjwUxtkXcHOfX8/0qlvb37/fNLjaMYRQAoC5PYc4yST/AK0sY7DkcaoetTtiucylB4e3Az5+Rx+mfpUrR7+HTNXt7xo1mtxgvG3HBGCCPqR9aZsrqezieO2kCi4XEgKKwccjsQfj7d6urROnbKEX2uJJLKygrp8IO0k+7Z498DtyPbGk/gVI3OsanMNLkTSy08s0gW1aCLgxsPKDjgbQfh6e9YTUundUUwRPZXUcEIzNM0Rxubkn4gD1rRr9ptpp1nFb2GnRwRopATJIUDsPj/t61Cn+1S+lnB/7dIkcElM5ce2DUY+RPURpTi9NlJqsUVlfW5sjK0KIpjdhhmwe+PY1qLWa4g1SFbe5aK0YfepCfwLFjcxPwGD+lWP7d6W6tFvaaopS52+WWMhfpnn+lU/XFtdaPptvpdoZZdPm8zXeMqUDeWLI9jyffj0Xnc1KVNGjroyWua3c63qpvrxkEhULGirtCoCSF+Pf+tSZLCS1nhhnnt5HnIJ8GXeF5xgnGM5/pTukwWlvaXepX9sLi3tQFSEnHiStwufkMt9BVPbXTGIumSYnG0MTwPTvVkk+heTTLy+V7O9SSCVfEQhwV9DVrqSwXTR6gjM0lygIXP8AZ4/EPzqFcWi3ly01qrFZ4xIqY3MWb0A+eR9DXNpFcNp1/bBHFzZtuMbA5VexGKXQ+vklfteyt7AWFw8rsjhg6dk5q2u7y71uw+52h32qIC6r3lB7k/1rAXQxKS24qR6+tej9PxR6P05aSGH75PettAQ4AGMku3YBQCTS5FSTXZsc7bT6MjpFhqQ15IdODRXttISJWO1Ygh8zOccL754IOBnNO9adQ22pTSWGkFVsBJ4k8qDH3qUdm9wi87R9aj9YdSx6je3VtoyLDYSsv3iRBg3jKAATnkIMeVfmx5PFFbReJNDCrqgdwu5zwmT3Pwp/6ybdvQqDwR94hOyWFgR8D7/TFOya1qdxaPZ3d3Lc27srsknOGAwGB98f1qOxntLi4t5UVXRmikVh2IyP9frTJ7Gmr7HUdaHYZfCbYcEHkZ9at9O1KW0CpHcSRoOQygMYvoeCvfK+ucjnOai3gFwH8+CANgHvzSRSkOyngrwfhStC7svOoHl/ZFmEhjW3aVnlaIeTxD2Kn+EqMgenI7jFM9N2V1Pc/tJIJhb2P7xpkGOR2AJ4JJ71HiuAbZ7S63Gzc5IX8UT/AMa9u3qvY9u+CLTrPXvuEcOlaHO8dokEW10LYlTb7kDI9+Bzu+NG21SEaSdyIt7ddMXt3Jc3l7q4uJDmQxASKzepBbn6Y4/WisaJWGcNnJzRTeKP2ReaX0bDXY2tbOxGz90qtH4qjKlwSGGR65H6VUTM6whkzyPStHeWwudb1rSXKqWupHt2c4UM53Dj25HPwqlktJtPhU6iPB2EptyCSf8AmaKZZ29kLxJDasZWBJYKi+uccnHsB+pFAtZSmWik2ntkHBqbc69p7xwwJYqoj/FJ6n3/AF/oKG6rMLbLOIeErAjcorNyBUF2yXbiR7V9PUqbSP8A7qBpdolyD4bc4yQfN5T2wD86DVbprm7Zy3A8q/IcCtBfdY/tG1CyWkMcnIZgO4IxXWiaX07qYZr27e2OPRvWlUq2zNKXrFmQLUbsc1rtQ6HkVJptLvFu4oxuAGMsKyUiMjssiFGBwVPvVIzUuiE8coPZ3BcSQSCSJtpByD7GvQ+mOrf2pZTaHrkgMNxxDN4YJic9s/DNebU7ayGKZWHfIxS5IRkhseRxZ6hfdPY6fitPvCB57r97IwKrEUzu+gAGPnUJBodjZRstpF9zIMiy3CF7i8IyMBe0aHJwfy5q1ttWt7y8vbOZ4GFzEqRrIT5neIKdvHJ47V5xrV1LcXsgcFETCLGT+ADsMfCowjJ6Z1ZppbRprn7Rr5UsU0yEadFaKwW2t3Iik3Dkvggn5e+eTVrpP2jRGSN9T07xJSu151cKwB7rluSPbLYxXmdFVeGDRyrK+zfdYODrD7LaC3iWMPGIV/Gh5Ddu5z29Oe/eo2t31zpOnHp+KZ/GkxJf4biLIGIB8u7fEgenLXTOrR2+kS3N3Gbi60pl+4Bmyu6TJGR67GUsB7k1daN9n8t1bftTqfUPuUc+ZdpAMr55LNnOM5+NK2orZdexh0G0YqZDH+7beMsR2rbX/THRaRLHbdSSRXPYeNtcH5gAVV630re2TTXGm+Hfacv4ZYGBIHuVHb6Z9KTmmMo0UfUJN0bbUYy7NcR7LgH/AMyAAn/ENrfMmqcCUnARsn+U1ptE0bUdZge2sojhZld5H8qLhSDljwO44+Va5/s6itbYG/6htoTt5Cx7l38H+LJ7+3x4rPKom70ecWMEsGZnZNqtt2Bskn4j2+NJeLubejg+pI9a1nVXSSafbyX0F54ls8fnmEDFN3r23bfkffv7ZGKznWNJ3eJrdmAMscoOMnHI7r69xTKSkrQX+osL5pydI7uyFtMSApLQSd9jHuD/ACn9Dz6nLmqRQoxu7IN4QkMb5xyfRgR3B/T61GjcMuT2rJ7sWcN8WUUiGNyjkqwOCD70VMvFSabcG24G38u36Yoq1nI4JMuzqDL1Ks7kvsSAP8dsSD+oFUuuak+pX0sznAJJUfWtBqelWrLcajp7OYVk2MeSpyucjPI5wMEk8/LONJ5pcbUlaLf6IzxLgxc11XGaUGqHMdZpQxHI7/CuM0ua2jXReaZrV5a3CCG4kUNhW59KsuodAuvC/aMatLEwyx+NZND5h6c1v9E6rhTRJdOvRvYjCN7VKacdo6MbUk1Iwjoy/iG2ljzvXb3yMU7fZF5J7ZyPlRp0bTX0Sjkl8n5VS9WRS9qReavcvDM8ZJjeOOFVVc8lcHPz5NVOoRmG8lGSQzblJ5yDyM/n+dXPU8UUXUUzSA3MEwWS3CNjejjK4P1x9DUHVB98je6MIheLbuj7ZBwMgHtzg/4j7Ukeisqd2VeaM1yatuk9OTV+pNOsJRiKacLJ/wCg5YfkKckk7o3XR9hB010lJ1HrNrBKZmD2UL8ksAdrc9vUj4VkurOr77qOUGdwsYPCr2q1+1XqE6hrB0+3O20siYkRe2RWEzUoRv3kWyT4+iOyzH+9mrDTNc1HSmDWN3JFg5K54P0quFck1VpP4IqTR6dD11cavpT20SxWt+oJwnlSYdzgej/E155f39xdysZnOScFSS39e/1qNDMYJUde6sCPpUvXADftKvaZRJ+dTjjjF2kUlklOI5Y67fWMQW0uZI+ckqePkR2Iq70nUQlzHqOh+HBqfhmOS0MIKOPUoOc59jz86yFCsVYEEgjtimcELHI12beLV1v57i2vtPs7Q+BLuFtB4ZJCk4YZx3HsO3rWakl2RbR2Ix9KsIJQfvk/JItWJYZOS5Vef/sao5Xyce1Iol5ydIcBBHm70U0r8UtOSHrPUJ4o5IRNJ4co8ybjg/Oq8nNdRnaSPeuD3NOkRlJvsKWuaWsAWlrmlrGOgafhbEmfhUan7Y+dv/WsFdhId8nzqfYO1ookQkSuBhgfwioESGSQAdywqZOw8VwOwYgfIcUrZSHdmy03qEyaQ9vctaWt5t2R3626STeGc7lYfixyT5cY5POTWdk0m6sIzNIqz2k8B8O5iy0bcrnuAVOccEA/mM128qwcHDYwp/h/5zSfepmEgM0h8U5ky58/fGR69z+dIk0Xk4vsPDTNXfRREHVWmPGcOs2M/wCE5qg37avOkjbQXUupXoleOz2tGkRCl3JwAT7UZdAxr3RX9UOH1+9YNuUytj8zVVmputTLPqlxKmNruWAA7Z5qDmnXRDJ+bOlahmriisJbFz71NvhLJbwTmJvD2bBJg7SR8aZhs7ibzRxnHxqY4eGze3ll8uCRGG4B+VBseMW0yrzRmgrSAZOKJMvPHkOmurSFkxEir2C8MTgDj0BqnkPnNTw+6xk83/yIPyVqr5BzSrsvJ6QpopB2pKItkrxLaJGWGDxWxgyy54+IAPH1zUI9zRRTEmc0UUURRaKKKwUFSLVc5NFFBjR7HrbKyoR3BrhnLN5qKKQszpj5RTe6lorBfQFuKsdKuAkc0RGRgSY/9e9FFZ9BxNqVorLtg8rFRgE5xTFFFNHojk3JsKnQIkEQmfzE8AUlFZgicyahO2UVyi+wqK7sx8xzRRRQspM4paKKIqZ0JGUYDcU5H5hRRSyHj2csMHFFFFAof//Z"
                    alt="review-image"
                    width={420}
                    height={400}
                    className="group-hover:opacity-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {truncateText(
                      "공연 제목입니다공연 제목입니다공연 제목입니다",
                      8
                    )}
                  </h2>
                  <h3>
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={1}
                          type="radio"
                          name="rating"
                          value={star}
                          checked={star === el.rate}
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                      ))}
                    </div>
                  </h3>
                  <h3>리뷰: {truncateText(el.content, 15)}</h3>
                  <h3 className="text-gray-500 flex justify-end group-hover:text-white">
                    {new Date(el.regdt).toLocaleDateString()}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Reviews;
