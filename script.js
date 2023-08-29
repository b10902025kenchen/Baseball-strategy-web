function goToPage(pageUrl) {
    window.location.href = pageUrl;
}

function calculate(gap, inning, half, outs, bases)
{
    var nan = "nan"
    var WPCT_home = [[0.0, 0.0, 0.0, 0.0, 19.2, 29.37, 38.27, 48.34, 59.41, nan, nan, nan,
        nan, nan, nan, nan, nan],
       [0.0, 0.0, 0.0, 0.0, 14.57, 22.65, 31.3, 41.59, 53.44, 64.77, 74.74, 
        82.28, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 18.28, 25.66, 34.51, 45.54, 58.12, 69.64, 78.59,
        85.65, 91.57, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 13.29, 20.95, 29.54, 40.09, 53.13, 65.94, 76.07,
        83.24, 89.1, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 16.52, 24.63, 33.99, 45.69, 58.2, 71.16, 80.57,
        86.9, 92.33, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 19.26, 27.94, 39.39, 52.68, 65.83, 76.97,
        84.62, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 14.19, 22.11, 31.6, 44.43, 59.01, 72.41, 82.36,
        89.06, 93.31, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 16.13, 25.15, 36.83, 52.66, 67.82, 79.02,
        86.84, 92.15, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.51, 19.37, 28.96, 42.15, 59.1, 74.52, 84.51,
        90.84, 94.95, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.51, 13.55, 22.63, 34.48, 52.47, 69.56, 81.13,
        88.66, 93.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.09, 15.85, 26.31, 40.57, 60.24, 77.64, 87.49,
        93.3, 96.41, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.1, 9.5, 18.03, 30.36, 52.22, 73.11, 84.84, 91.71,
        95.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.99, 11.51, 21.47, 35.86, 61.31, 82.25, 91.2,
        95.8, 97.89, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.1, 6.01, 12.84, 24.39, 52.47, 77.71, 89.3, 94.85,
        97.4, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.92, 7.76, 15.33, 29.36, 63.56, 89.18, 95.65,
        98.38, 99.24, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.22, 2.85, 6.69, 14.93, 52.3, 86.62, 94.39, 97.77,
        99.06, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.4, 3.56, 8.1, 18.23, 66.09, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 52.42, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var WPCT_away = [[nan, nan, nan, nan, nan, nan, nan, nan, 40.59, 51.66, 61.73, 70.63,
        80.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 17.72, 25.26, 35.23, 46.56, 58.41, 68.7,
        77.35, 85.43, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 8.43, 14.35, 21.41, 30.36, 41.88, 54.46, 65.49,
        74.34, 81.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 10.9, 16.76, 23.93, 34.06, 46.87, 59.91, 70.46,
        79.05, 86.71, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.67, 13.1, 19.43, 28.84, 41.8, 54.31, 66.01,
        75.37, 83.48, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 15.38, 23.03, 34.17, 47.32, 60.61, 72.06,
        80.74, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.69, 10.94, 17.64, 27.59, 40.99, 55.57, 68.4,
        77.89, 85.81, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.85, 13.16, 20.98, 32.18, 47.34, 63.17, 74.85,
        83.87, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.05, 9.16, 15.49, 25.48, 40.9, 57.85, 71.04,
        80.63, 88.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.2, 11.34, 18.87, 30.44, 47.53, 65.52, 77.37,
        86.45, 92.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.59, 6.7, 2.51, 22.36, 39.76, 59.43, 73.69, 84.15,
        90.91, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 4.28, 8.29, 15.16, 26.89, 47.78, 69.64, 81.97,
        90.5, 94.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.11, 4.2, 8.8, 17.75, 38.69, 64.14, 78.53, 88.49,
        94.01, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.6, 5.15, 10.7, 22.29, 47.53, 75.61, 87.16, 93.99,
        96.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.76, 1.62, 4.35, 10.82, 36.44, 70.64, 84.67,
        92.24, 96.08, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.94, 2.23, 5.61, 13.38, 47.7, 85.07, 93.31, 97.15,
        98.78, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 33.91, 81.77, 91.9, 96.44,
        98.6, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 47.48, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var P24 = [[0.72668, 0.14883, 0.06856, 0.03147, 0.02446],
    [0.57373, 0.18742, 0.12413, 0.06198, 0.05274],
    [0.37911, 0.35234, 0.14021, 0.06996, 0.05837],
    [0.17332, 0.5425, 0.14889, 0.07304, 0.06224],
    [0.36334, 0.22684, 0.16622, 0.12338, 0.12022],
    [0.14212, 0.43316, 0.17466, 0.1272, 0.12287],
    [0.14788, 0.25992, 0.30675, 0.144, 0.14146],
    [0.13399, 0.26226, 0.20938, 0.15153, 0.24285],
    [0.8415, 0.09472, 0.03865, 0.01541, 0.00973],
    [0.72739, 0.12636, 0.08526, 0.03647, 0.02453],
    [0.58626, 0.25098, 0.0943, 0.04118, 0.02728],
    [0.34085, 0.48799, 0.09821, 0.04339, 0.02956],
    [0.57171, 0.17054, 0.11338, 0.08449, 0.05989],
    [0.34298, 0.38564, 0.12339, 0.08565, 0.06234],
    [0.32029, 0.27098, 0.23146, 0.09521, 0.08205],
    [0.32833, 0.26236, 0.16281, 0.1053, 0.1412],
    [0.93332, 0.04483, 0.0148, 0.00473, 0.00232],
    [0.87353, 0.06272, 0.0432, 0.01381, 0.00674],
    [0.77356, 0.15727, 0.04508, 0.01612, 0.00797],
    [0.72398, 0.20735, 0.04498, 0.01553, 0.00815],
    [0.76678, 0.11397, 0.05767, 0.04161, 0.01997],
    [0.71013, 0.16268, 0.0643, 0.04216, 0.02073],
    [0.72286, 0.05968, 0.14766, 0.04388, 0.02592],
    [0.67312, 0.09785, 0.11067, 0.05525, 0.06311]]

    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    console.log('outs:', outs);
    console.log('bases:', bases);
    console.log(outs*8+bases)
    // console.log(P24[outs * 8 + bases][0])
    var val1, val2;
    // console.log(P24[outs * 8 + bases][0], WPCT_away[inning * 2 - 1][gap], P24[outs * 8 + bases][1], WPCT_away[inning * 2 - 1][gap - 1]);
    if(half === 1)
    {
        val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 1][gap - 1] + 
            P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 1][gap - 2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 1][gap - 3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 1][gap - 4];
        var num = 0
        if(bases === 0) num = 1
        if(bases === 1 || bases === 2) num = 4
        if(bases === 3) num = 5
        if(bases === 4 || bases === 5 || bases === 6) num = 7
        if(bases === 7) num = 7, gap -= 1
        console.log(P24[outs * 8 + num][0], WPCT_away[inning * 2 - 1][gap], P24[outs * 8 + num][1], WPCT_away[inning * 2 - 1][gap - 1]);
        val2 = P24[outs * 8 + num][0] * WPCT_away[inning * 2 - 1][gap] + P24[outs * 8 + num][1] * WPCT_away[inning * 2 - 1][gap - 1] + 
            P24[outs * 8 + num][2] * WPCT_away[inning * 2 - 1][gap - 2] + P24[outs * 8 + num][3] * WPCT_away[inning * 2 - 1][gap - 3] + P24[outs * 8 + num][4] * WPCT_away[inning * 2 - 1][gap - 4]; 
    }
    else
    {
        val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 2][gap - 1] + 
            P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 2][gap - 2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 2][gap - 3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 2][gap - 4];
        var num = 0
        if(bases === 0) num = 1
        if(bases === 1 || bases === 2) num = 4
        if(bases === 3) num = 5
        if(bases === 4 || bases === 5 || bases === 6) num = 7
        if(bases === 7) num = 7, gap -= 1
        console.log(P24[outs * 8 + num][0])
        console.log(WPCT_home[inning * 2 - 2][gap])
        val2 = P24[outs * 8 + num][0] * WPCT_home[inning * 2 - 2][gap] + P24[outs * 8 + num][1] * WPCT_home[inning * 2 - 2][gap - 1] + 
            P24[outs * 8 + num][2] * WPCT_home[inning * 2 - 2][gap - 2] + P24[outs * 8 + num][3] * WPCT_home[inning * 2 - 2][gap - 3] + P24[outs * 8 + num][4] * WPCT_home[inning * 2 - 2][gap - 4]; 
    }
    val1 = Number(val1.toFixed(2));
    val2 = Number(val2.toFixed(2));

    if(inning === 1 && half === 0 && gap >= 9) 
    {
        val1 = "invalid"
        val2 = "invalid"
    }
    if(inning === 9 && half === 1 && gap <= 7)
    {
        val1 = "invalid"
        val2 = "invalid"
    }
    return [val1, val2]
}

function submitForm() {
    var gap = parseInt(document.getElementById('gap').value);
    var inning = parseInt(document.getElementById('inning').value);
    var half = parseInt(document.getElementById('half').value);
    var outs = parseInt(document.getElementById('outs').value);
    var bases = parseInt(document.getElementById('bases').value);

    // You can do whatever you want with the form values here.
    // For now, we'll just log them to the console.
    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    console.log('outs:', outs);
    console.log('bases:', bases);

    var arr = calculate(gap, inning, half, outs, bases);
    var val1 = arr[0], val2 = arr[1];

    const formData = `
    <p>
        <strong>Current winning percentage:</strong> ${val1}<br>
        <strong>After IBB winning percentage:</strong> ${val2}<br>
    </p>
    `;

    // Update the 'results' div with the captured form data
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.setProperty('visibility', 'visible');
    resultsDiv.innerHTML = formData;

    // Returning false to prevent the form from submitting normally
    return false;
}

function calculate2(gap, inning, half, outs, bases)
{
    var nan = "nan"
    var WPCT_home = [[0.0, 0.0, 0.0, 0.0, 19.2, 29.37, 38.27, 48.34, 59.41, nan, nan, nan,
        nan, nan, nan, nan, nan],
       [0.0, 0.0, 0.0, 0.0, 14.57, 22.65, 31.3, 41.59, 53.44, 64.77, 74.74, 
        82.28, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 18.28, 25.66, 34.51, 45.54, 58.12, 69.64, 78.59,
        85.65, 91.57, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 13.29, 20.95, 29.54, 40.09, 53.13, 65.94, 76.07,
        83.24, 89.1, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 16.52, 24.63, 33.99, 45.69, 58.2, 71.16, 80.57,
        86.9, 92.33, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 19.26, 27.94, 39.39, 52.68, 65.83, 76.97,
        84.62, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 14.19, 22.11, 31.6, 44.43, 59.01, 72.41, 82.36,
        89.06, 93.31, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 16.13, 25.15, 36.83, 52.66, 67.82, 79.02,
        86.84, 92.15, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.51, 19.37, 28.96, 42.15, 59.1, 74.52, 84.51,
        90.84, 94.95, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.51, 13.55, 22.63, 34.48, 52.47, 69.56, 81.13,
        88.66, 93.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.09, 15.85, 26.31, 40.57, 60.24, 77.64, 97.49,
        93.3, 96.41, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.1, 9.5, 18.03, 30.36, 52.22, 73.11, 84.84, 91.71,
        95.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.99, 11.51, 21.47, 35.86, 61.31, 82.25, 91.2,
        95.8, 97.89, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.1, 6.01, 12.84, 24.39, 52.47, 77.71, 89.3, 94.85,
        97.4, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.92, 7.76, 15.33, 29.36, 63.56, 89.18, 95.65,
        98.38, 99.24, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.22, 2.85, 6.69, 14.93, 52.3, 86.62, 94.39, 97.77,
        99.06, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.4, 3.56, 8.1, 18.23, 66.09, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 52.42, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var WPCT_away = [[nan, nan, nan, nan, nan, nan, nan, nan, 40.59, 51.66, 61.73, 70.63,
        80.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 17.72, 25.26, 35.23, 46.56, 58.41, 68.7,
        77.35, 85.43, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 8.43, 14.35, 21.41, 30.36, 41.88, 54.46, 65.49,
        74.34, 81.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 10.9, 16.76, 23.93, 34.06, 46.87, 59.91, 70.46,
        79.05, 86.71, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.67, 13.1, 19.43, 28.84, 41.8, 54.31, 66.01,
        75.37, 83.48, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 15.38, 23.03, 34.17, 47.32, 60.61, 72.06,
        80.74, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.69, 10.94, 17.64, 27.59, 40.99, 55.57, 68.4,
        77.89, 85.81, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.85, 13.16, 20.98, 32.18, 47.34, 63.17, 74.85,
        83.87, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.05, 9.16, 15.49, 25.48, 40.9, 57.85, 71.04,
        80.63, 88.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.2, 11.34, 18.87, 30.44, 47.53, 65.52, 77.37,
        86.45, 92.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.59, 6.7, 2.51, 22.36, 39.76, 59.43, 73.69, 84.15,
        90.91, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 4.28, 8.29, 15.16, 26.89, 47.78, 69.64, 81.97,
        90.5, 94.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.11, 4.2, 8.8, 17.75, 38.69, 64.14, 78.53, 88.49,
        94.01, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.6, 5.15, 10.7, 22.29, 47.53, 75.61, 87.16, 93.99,
        96.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.76, 1.62, 4.35, 10.82, 36.44, 70.64, 84.67,
        92.24, 96.08, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.94, 2.23, 5.61, 13.38, 47.7, 85.07, 93.31, 97.15,
        98.78, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 33.91, 81.77, 91.9, 96.44,
        98.6, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 47.48, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var P24 = [[0.72668, 0.14883, 0.06856, 0.03147, 0.02446],
    [0.57373, 0.18742, 0.12413, 0.06198, 0.05274],
    [0.37911, 0.35234, 0.14021, 0.06996, 0.05837],
    [0.17332, 0.5425, 0.14889, 0.07304, 0.06224],
    [0.36334, 0.22684, 0.16622, 0.12338, 0.12022],
    [0.14212, 0.43316, 0.17466, 0.1272, 0.12287],
    [0.14788, 0.25992, 0.30675, 0.144, 0.14146],
    [0.13399, 0.26226, 0.20938, 0.15153, 0.24285],
    [0.8415, 0.09472, 0.03865, 0.01541, 0.00973],
    [0.72739, 0.12636, 0.08526, 0.03647, 0.02453],
    [0.58626, 0.25098, 0.0943, 0.04118, 0.02728],
    [0.34085, 0.48799, 0.09821, 0.04339, 0.02956],
    [0.57171, 0.17054, 0.11338, 0.08449, 0.05989],
    [0.34298, 0.38564, 0.12339, 0.08565, 0.06234],
    [0.32029, 0.27098, 0.23146, 0.09521, 0.08205],
    [0.32833, 0.26236, 0.16281, 0.1053, 0.1412],
    [0.93332, 0.04483, 0.0148, 0.00473, 0.00232],
    [0.87353, 0.06272, 0.0432, 0.01381, 0.00674],
    [0.77356, 0.15727, 0.04508, 0.01612, 0.00797],
    [0.72398, 0.20735, 0.04498, 0.01553, 0.00815],
    [0.76678, 0.11397, 0.05767, 0.04161, 0.01997],
    [0.71013, 0.16268, 0.0643, 0.04216, 0.02073],
    [0.72286, 0.05968, 0.14766, 0.04388, 0.02592],
    [0.67312, 0.09785, 0.11067, 0.05525, 0.06311]]

    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    console.log('outs:', outs);
    console.log('bases:', bases);
    console.log(outs*8+bases)

    var val1 = 0, val2 = 0, val3 = 0, val4 = 0;

    if(half === 0)
    {
        val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
            P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
        var num1 = bases + 1; 
        val2 = P24[outs * 8 + num1][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + num1][1] * WPCT_away[inning * 2 - 2][gap+1] +
            P24[outs * 8 + num1][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + num1][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + num1][4] * WPCT_away[inning * 2 - 2][gap+4];
        var num2 = 0;
        if(outs === 2) val3 = WPCT_away[inning * 2 - 2][gap];
        else val3 = P24[outs * 8 + num2][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + num2][1] * WPCT_away[inning * 2 - 2][gap+1] +
        P24[outs * 8 + num2][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + num2][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + num2][4] * WPCT_away[inning * 2 - 2][gap+4];
    }
    else
    {
        val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
            P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
        var num1 = bases + 1; 
        val2 = P24[outs * 8 + num1][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + num1][1] * WPCT_home[inning * 2 - 1][gap+1] +
            P24[outs * 8 + num1][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + num1][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + num1][4] * WPCT_home[inning * 2 - 1][gap+4];
        var num2 = 0;
        if(outs == 2) val3 = WPCT_home[inning * 2 - 2][gap];
        else val3 = P24[outs * 8 + num2][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + num2][1] * WPCT_home[inning * 2 - 1][gap+1] +
        P24[outs * 8 + num2][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + num2][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + num2][4] * WPCT_home[inning * 2 - 1][gap+4];
    }

    val4 = (val1 - val3) * 100 / (val2 - val3);

    val1 = Number(val1.toFixed(2));
    val2 = Number(val2.toFixed(2));
    val3 = Number(val3.toFixed(2));
    val4 = Number(val4.toFixed(2));

    if(inning === 1 && half === 0 && gap >= 9) 
    {
        val1 = "invalid"
        val2 = "invalid"
        val3 = "invalid"
        val4 = "invalid"
    }
    if(inning === 9 && half === 1 && gap >= 9)
    {
        val1 = "invalid"
        val2 = "invalid"
        val3 = "invalid"
        val4 = "invalid"
    }

    return [val1, val2, val3, val4];
}

function submitForm2() {
    var gap = parseInt(document.getElementById('gap').value);
    var inning = parseInt(document.getElementById('inning').value);
    var half = parseInt(document.getElementById('half').value);
    var outs = parseInt(document.getElementById('outs').value);
    var bases = parseInt(document.getElementById('bases').value);

    // You can do whatever you want with the form values here.
    // For now, we'll just log them to the console.
    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    console.log('outs:', outs);
    console.log('bases:', bases);

    var arr = calculate2(gap, inning, half, outs, bases);
    var val1 = arr[0], val2 = arr[1], val3 = arr[2], val4 = arr[3];

    const formData = `
    <p>
        <strong>Current winning percentage: </strong>${val1} <br>
        <strong>Success Steal winning percentage: </strong>${val2} <br>
        <strong>Fail to Steal winning percentage: </strong>${val3} <br>
        <strong>Steal if you have at least </strong>${val4}<strong> % to success </strong><br>
    </p>

    `;

    // Update the 'results' div with the captured form data
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.setProperty('visibility', 'visible');
    resultsDiv.innerHTML = formData;

    // Returning false to prevent the form from submitting normally
    return false;
}

function calculate3(gap, inning, half, cond, better, success, worse)
{
    var nan = "nan"
    var WPCT_home = [[0.0, 0.0, 0.0, 0.0, 19.2, 29.37, 38.27, 48.34, 59.41, nan, nan, nan,
        nan, nan, nan, nan, nan],
       [0.0, 0.0, 0.0, 0.0, 14.57, 22.65, 31.3, 41.59, 53.44, 64.77, 74.74, 
        82.28, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 18.28, 25.66, 34.51, 45.54, 58.12, 69.64, 78.59,
        85.65, 91.57, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 13.29, 20.95, 29.54, 40.09, 53.13, 65.94, 76.07,
        83.24, 89.1, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 16.52, 24.63, 33.99, 45.69, 58.2, 71.16, 80.57,
        86.9, 92.33, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 19.26, 27.94, 39.39, 52.68, 65.83, 76.97,
        84.62, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 14.19, 22.11, 31.6, 44.43, 59.01, 72.41, 82.36,
        89.06, 93.31, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 16.13, 25.15, 36.83, 52.66, 67.82, 79.02,
        86.84, 92.15, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.51, 19.37, 28.96, 42.15, 59.1, 74.52, 84.51,
        90.84, 94.95, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.51, 13.55, 22.63, 34.48, 52.47, 69.56, 81.13,
        88.66, 93.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.09, 15.85, 26.31, 40.57, 60.24, 77.64, 97.49,
        93.3, 96.41, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.1, 9.5, 18.03, 30.36, 52.22, 73.11, 84.84, 91.71,
        95.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.99, 11.51, 21.47, 35.86, 61.31, 82.25, 91.2,
        95.8, 97.89, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.1, 6.01, 12.84, 24.39, 52.47, 77.71, 89.3, 94.85,
        97.4, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.92, 7.76, 15.33, 29.36, 63.56, 89.18, 95.65,
        98.38, 99.24, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.22, 2.85, 6.69, 14.93, 52.3, 86.62, 94.39, 97.77,
        99.06, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 1.4, 3.56, 8.1, 18.23, 66.09, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 52.42, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var WPCT_away = [[nan, nan, nan, nan, nan, nan, nan, nan, 40.59, 51.66, 61.73, 70.63,
        80.8, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 11.82, 17.72, 25.26, 35.23, 46.56, 58.41, 68.7,
        77.35, 85.43, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 8.43, 14.35, 21.41, 30.36, 41.88, 54.46, 65.49,
        74.34, 81.72, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 10.9, 16.76, 23.93, 34.06, 46.87, 59.91, 70.46,
        79.05, 86.71, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.67, 13.1, 19.43, 28.84, 41.8, 54.31, 66.01,
        75.37, 83.48, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 9.44, 15.38, 23.03, 34.17, 47.32, 60.61, 72.06,
        80.74, 88.18, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.69, 10.94, 17.64, 27.59, 40.99, 55.57, 68.4,
        77.89, 85.81, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 7.85, 13.16, 20.98, 32.18, 47.34, 63.17, 74.85,
        83.87, 90.56, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 5.05, 9.16, 15.49, 25.48, 40.9, 57.85, 71.04,
        80.63, 88.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 6.2, 11.34, 18.87, 30.44, 47.53, 65.52, 77.37,
        86.45, 92.49, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 3.59, 6.7, 2.51, 22.36, 39.76, 59.43, 73.69, 84.15,
        90.91, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 4.28, 8.29, 15.16, 26.89, 47.78, 69.64, 81.97,
        90.5, 94.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.11, 4.2, 8.8, 17.75, 38.69, 64.14, 78.53, 88.49,
        94.01, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 2.6, 5.15, 10.7, 22.29, 47.53, 75.61, 87.16, 93.99,
        96.9, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.76, 1.62, 4.35, 10.82, 36.44, 70.64, 84.67,
        92.24, 96.08, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.94, 2.23, 5.61, 13.38, 47.7, 85.07, 93.31, 97.15,
        98.78, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 33.91, 81.77, 91.9, 96.44,
        98.6, 100.0, 100.0, 100.0, 100.0],
       [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 47.48, 100.0, 100.0, 100.0,
        100.0, 100.0, 100.0, 100.0, 100.0]]
    
    var P24 = [[0.72668, 0.14883, 0.06856, 0.03147, 0.02446],
    [0.57373, 0.18742, 0.12413, 0.06198, 0.05274],
    [0.37911, 0.35234, 0.14021, 0.06996, 0.05837],
    [0.17332, 0.5425, 0.14889, 0.07304, 0.06224],
    [0.36334, 0.22684, 0.16622, 0.12338, 0.12022],
    [0.14212, 0.43316, 0.17466, 0.1272, 0.12287],
    [0.14788, 0.25992, 0.30675, 0.144, 0.14146],
    [0.13399, 0.26226, 0.20938, 0.15153, 0.24285],
    [0.8415, 0.09472, 0.03865, 0.01541, 0.00973],
    [0.72739, 0.12636, 0.08526, 0.03647, 0.02453],
    [0.58626, 0.25098, 0.0943, 0.04118, 0.02728],
    [0.34085, 0.48799, 0.09821, 0.04339, 0.02956],
    [0.57171, 0.17054, 0.11338, 0.08449, 0.05989],
    [0.34298, 0.38564, 0.12339, 0.08565, 0.06234],
    [0.32029, 0.27098, 0.23146, 0.09521, 0.08205],
    [0.32833, 0.26236, 0.16281, 0.1053, 0.1412],
    [0.93332, 0.04483, 0.0148, 0.00473, 0.00232],
    [0.87353, 0.06272, 0.0432, 0.01381, 0.00674],
    [0.77356, 0.15727, 0.04508, 0.01612, 0.00797],
    [0.72398, 0.20735, 0.04498, 0.01553, 0.00815],
    [0.76678, 0.11397, 0.05767, 0.04161, 0.01997],
    [0.71013, 0.16268, 0.0643, 0.04216, 0.02073],
    [0.72286, 0.05968, 0.14766, 0.04388, 0.02592],
    [0.67312, 0.09785, 0.11067, 0.05525, 0.06311]]

    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    

    var val1 = 0, val2 = 0, val3 = 0;

    if(half === 0)
    {
        if(cond === 0) // 0 out 1 base
        {
            var outs = 0, bases = 1;
            val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 2;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 0, bases = 4;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 1;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        } 
        if(cond === 1) // 1 out 1 base
        {
            var outs = 1, bases = 1;
            val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 2, bases = 2;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 4;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 2, bases = 1;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
        if(cond === 2) // 0 out 12 base
        {
            var outs = 0, bases = 4;
            val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 6;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 0, bases = 7;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 4;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
        if(cond === 3) // 0 out 2 base
        {
            var outs = 0, bases = 2;
            val1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 3;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 0, bases = 5;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            outs = 1, bases = 2;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_away[inning * 2 - 2][gap] + P24[outs * 8 + bases][1] * WPCT_away[inning * 2 - 2][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_away[inning * 2 - 2][gap+2] + P24[outs * 8 + bases][3] * WPCT_away[inning * 2 - 2][gap+3] + P24[outs * 8 + bases][4] * WPCT_away[inning * 2 - 2][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
    }
    if(half === 1)
    {
        if(cond === 0) // 0 out 1 base
        {
            var outs = 0, bases = 1;
            val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 2;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 0, bases = 4;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 1;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        } 
        if(cond === 1) // 1 out 1 base
        {
            var outs = 1, bases = 1;
            val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 2, bases = 2;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 4;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 2, bases = 1;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
        if(cond === 2) // 0 out 12 base
        {
            var outs = 0, bases = 4;
            console.log(P24[outs * 8 + bases][0]);
            console.log(WPCT_home[inning * 2 - 2][gap])
            val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 6;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 0, bases = 7;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 4;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
        if(cond === 3) // 0 out 2 base
        {
            var outs = 0, bases = 2;
            val1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 3;
            var tmp1 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 0, bases = 5;
            var tmp2 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            outs = 1, bases = 2;
            var tmp3 = P24[outs * 8 + bases][0] * WPCT_home[inning * 2 - 1][gap] + P24[outs * 8 + bases][1] * WPCT_home[inning * 2 - 1][gap+1] +
                P24[outs * 8 + bases][2] * WPCT_home[inning * 2 - 1][gap+2] + P24[outs * 8 + bases][3] * WPCT_home[inning * 2 - 1][gap+3] + P24[outs * 8 + bases][4] * WPCT_home[inning * 2 - 1][gap+4];
            val2 = success * tmp1 + better * tmp2 + worse * tmp3;
            val3 = tmp1;
        }
    }
    val2 = val2 / 100;
    val1 = Number(val1.toFixed(2));
    val2 = Number(val2.toFixed(2));
    val3 = Number(val3.toFixed(2));

    if(inning === 1 && half === 0 && gap >= 9) 
    {
        val1 = "invalid"
        val2 = "invalid"
        val3 = "invalid"
    }
    if(inning === 9 && half === 1 && gap >= 9)
    {
        val1 = "invalid"
        val2 = "invalid"
        val3 = "invalid"
    }

    return [val1, val2, val3];
}

function submitForm3() {
    var gap = parseInt(document.getElementById('gap').value);
    var inning = parseInt(document.getElementById('inning').value);
    var half = parseInt(document.getElementById('half').value);
    var cond = parseInt(document.getElementById('cond').value);
    var better = parseInt(document.getElementById('better').value);
    var success = parseInt(document.getElementById('success').value);
    var worse = parseInt(document.getElementById('worse').value);

    // You can do whatever you want with the form values here.
    // For now, we'll just log them to the console.
    console.log('Gap:', gap);
    console.log('inning:', inning);
    console.log('half:', half);
    console.log('cond:', cond);

    var arr = calculate3(gap, inning, half, cond, better, success, worse);
    var val1 = arr[0], val2 = arr[1], val3 = arr[2];

    const formData = `
    <p>
        <strong>Current winning percentage: </strong>${val1} <br>
        <strong>After bunt winning percentage: </strong>${val2} <br>
        <strong>100% success bunt winning percentage: </strong>${val3} <br>
    </p>

    `;

    // Update the 'results' div with the captured form data
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.setProperty('visibility', 'visible');
    resultsDiv.innerHTML = formData;

    // Returning false to prevent the form from submitting normally
    return false;
}