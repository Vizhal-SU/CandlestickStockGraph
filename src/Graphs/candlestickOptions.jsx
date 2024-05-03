const candlestickOptions = (isDarkTheme) => {
  return {
    chart: {
      type: "candlestick",
      background: isDarkTheme ? "dark" : "light",
      parentHeightOffset: 15
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    theme: {
      mode: isDarkTheme ? "dark" : "light",
      palette: "palette1",
    },
    tooltip: {
      enabled: true,
      intersect: true,
      shared: false,
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
    },

    grid: {
      show: true,
      borderColor: isDarkTheme ? "#FAFAFF" : "#314155",
    }
  };
};

export default candlestickOptions;
