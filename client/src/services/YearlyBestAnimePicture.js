const yearlyBestAnime = (year) => {
  if (year === 2021) {
    return "https://cdn.myanimelist.net/images/anime/1000/110531.jpg";
  } else if (year === 2020) {
    return "https://cdn.myanimelist.net/images/anime/1171/109222.jpg";
  } else if (year === 2019) {
    return "https://cdn.myanimelist.net/images/anime/1286/99889.jpg";
  } else if (year === 2018) {
    return "https://cdn.myanimelist.net/images/anime/1173/92110.jpg";
  } else if (year === 2017) {
    return "https://cdn.myanimelist.net/images/anime/12/85221.jpg";
  } else if (year === 2016) {
    return "https://cdn.myanimelist.net/images/anime/10/78745.jpg";
  } else if (year === 2015) {
    return "https://cdn.myanimelist.net/images/anime/12/76049.jpg";
  } else if (year === 2014) {
    return "https://cdn.myanimelist.net/images/anime/5/64449.jpg";
  } else if (year === 2013) {
    return "https://cdn.myanimelist.net/images/anime/10/47347.jpg";
  } else if (year === 2012) {
    return "https://cdn.myanimelist.net/images/anime/11/39717.jpg";
  } else if (year === 2011) {
    return "https://cdn.myanimelist.net/images/anime/5/73199.jpg";
  } else if (year === 2010) {
    return "https://cdn.myanimelist.net/images/anime/10/22061.jpg";
  } else if (year === 2009) {
    return "https://cdn.myanimelist.net/images/anime/1223/96541.jpg";
  } else if (year === 2008) {
    return "https://cdn.myanimelist.net/images/anime/13/22128.jpg";
  } else if (year === 2007) {
    return "https://cdn.myanimelist.net/images/anime/5/17407.jpg";
  } else if (year === 2006) {
    return "https://cdn.myanimelist.net/images/anime/9/9453.jpg";
  } else if (year === 2005) {
    return "https://cdn.myanimelist.net/images/anime/2/73862.jpg";
  } else if (year === 2004) {
    return "https://cdn.myanimelist.net/images/anime/3/40451.jpg";
  } else if (year === 2003) {
    return "https://cdn.myanimelist.net/images/anime/10/75815.jpg";
  } else if (year === 2002) {
    return "https://cdn.myanimelist.net/images/anime/13/17405.jpg";
  } else if (year === 2001) {
    return "https://cdn.myanimelist.net/images/anime/10/19956.jpg";
  } else if (year === 2000) {
    return "https://cdn.myanimelist.net/images/anime/1589/95329.jpg";
  }
};

const yearlyBestAnimeService = {
  yearlyBestAnime,
};

export default yearlyBestAnimeService;
