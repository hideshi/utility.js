function fromChristianEraToJapaneseEra(year) {
    var jp_era, base;
    y = parseInt(year);
    if ((1868 <= y) && (y <= 1911)) {
        jp_era = "明治";
        base = 1968;
    }
    else if ((1912 <= y) && (y <= 1925)) {
        jp_era = "大正";
        base = 1912;
    }
    else if ((1926 <= y) && (y <= 1988)) {
        jp_era = "昭和";
        base = 1926;
    }
    else {
        jp_era = "平成";
        base = 1989;
    }
    return [jp_era, y - base + 1];
}

function fromJapaneseEraToChristianEra(era, year) {
    var base;
    switch (era) {
        case "明治": base = 1867; break;
        case "大正": base = 1911; break;
        case "昭和": base = 1925; break;
        case "平成": base = 1988; break;
    }
    return base + parseInt(year);
}
