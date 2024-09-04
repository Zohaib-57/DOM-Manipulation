document.querySelector('button').addEventListener('click', ()=> {
    const height = parseFloat(document.getElementById('heihgt').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    
    if(isNaN(height) || isNaN(weight)) {
        document.getElementById('results').innerText = "Please enter valid numbers for height and weight.";
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    let bmiCategory = '';
    if(bmi < 18.6) {
        bmiCategory = 'Underweight';
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        bmiCategory = 'Normal';
    } else {
        bmiCategory = 'Overweight';
    }
    
    document.getElementById('results').innerText = `Your BMI is ${bmi} (${bmiCategory})`;
});
