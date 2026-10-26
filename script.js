// 인물 정보
const people = {
    person1: {
        name: "김철수",
        birthday: "2003-10-02"
    }
};

const result = document.getElementById("result");
const personName = document.getElementById("person-name");
const birthday = document.getElementById("birthday");
const fortuneButton = document.getElementById("fortune-button");
const fortuneResult = document.getElementById("fortune-result");

let selectedPerson = null;

// 이름을 클릭하면 해당 인물의 생일 표시
document.querySelectorAll(".person").forEach(button => {
    button.addEventListener("click", () => {
        selectedPerson = people[button.dataset.id];

        personName.textContent = selectedPerson.name;
        birthday.textContent =
            `생일: ${selectedPerson.birthday}`;

        fortuneResult.textContent = "";
        result.hidden = false;
    });
});

// 운세 확인 버튼
fortuneButton.addEventListener("click", () => {
    if (!selectedPerson) {
        return;
    }

    fortuneResult.textContent =
        "운세 조회 기능은 아직 연결되지 않았습니다.";
});
