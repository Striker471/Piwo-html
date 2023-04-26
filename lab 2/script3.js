"use strict";
const todoList = document.querySelector(".todo-list");
const trashList = document.querySelector("#trash-list");
const btnAdd = document.querySelector(".add-btn");
const inputField = document.querySelector(".input-field");


function addDeleteButtonClickHandler(deleteButton) {
  $(deleteButton)
    .off()
    .click(function () {
      const listItem = $(this).parent();
      $("#modal-window").removeClass("hidden");
      $("#overlay").removeClass("hidden");

      $("#yes-btn")
        .off()
        .click(function () {
          $("#modal-window").addClass("hidden");
          $("#overlay").addClass("hidden");

          const button = listItem.find(".remove-button");
          button.removeClass("remove-button").addClass("return-button");

          if (!isElementInList(trashList, listItem[0])) {
            trashList.append(listItem[0].cloneNode(true));
          }

          listItem.remove();
          addReturnButtonClickHandler(trashList.lastChild.querySelector(".return-button"));
        });

      $("#no-btn").click(function () {
        $("#modal-window").addClass("hidden");
        $("#overlay").addClass("hidden");
      });
    });
}

function addReturnButtonClickHandler(returnButton) {
  $(returnButton)
    .off()
    .click(function () {
      const trashListItem = $(this).parent();
      const button = trashListItem.find(".return-button");
      button.removeClass("return-button").addClass("remove-button");

      if (!isElementInList(todoList, trashListItem[0])) {
        todoList.append(trashListItem[0].cloneNode(true));
      }

      trashListItem.remove();
      addDeleteButtonClickHandler(todoList.lastChild.querySelector(".remove-button"));
    });
}

btnAdd.addEventListener("click", () => {
    const inputValue = inputField.value;
    if (inputValue === "") {
      alert("You must write something !");
    } else {
      const li = document.createElement("li");
      const text = document.createElement("span");
      text.textContent = inputValue;
      li.appendChild(text);
      li.classList.add("task");
      text.classList.add("task-text");
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("remove-button");
      deleteButton.classList.add("small-button");
      li.append(deleteButton);
  
      todoList.appendChild(li);
      inputField.value = "";
  
      addDeleteButtonClickHandler(deleteButton);
    }
  });
  
  function isElementInList(list, element) {
    return Array.from(list.children).some((el) => el.isEqualNode(element));
  }
  

todoList.addEventListener("click", function (e) {
  const date = new Date();
  const clickedTask = e.target;

  const dateOfTask = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;

  if (clickedTask.classList.contains("task")) {
    if (!clickedTask.classList.contains("task--done")) {
      clickedTask.classList.add("task--done");

      const taskTextEl = clickedTask.querySelector(".task-text");
      const nextSiblingEl = taskTextEl.nextSibling;

      clickedTask.querySelector(".task-text").classList.add("task-text--done");

      const dateEl = document.createElement("span");
      dateEl.classList.add("date");
      dateEl.textContent = dateOfTask;

      clickedTask.insertBefore(dateEl, nextSiblingEl);
    } else {
      clickedTask.classList.remove("task--done");
      clickedTask.querySelector(".task-text").classList.remove("task-text--done");

      clickedTask.removeChild(clickedTask.querySelector(".date"));
    }
  }
});





