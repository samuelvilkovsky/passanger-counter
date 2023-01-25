let clicks = 0;
let storeSum = 0;

document.getElementById("increment-btn").addEventListener("click", () => {
    clicks += 1;
    document.getElementById("count-el").innerText = clicks;
});

document.getElementById("delete-btn").addEventListener("click", () => {
    storeSum += clicks;
    clicks = 0;
    document.getElementById("store-sum").innerText = storeSum;
    document.getElementById("count-el").innerText = clicks;
});

  