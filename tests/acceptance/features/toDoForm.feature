Feature: Todo React

  Scenario: ToDo task add test
    Given user has opened the home page
    When user add a task "New Task"
    Then the task "New Task" should appear in the toDo list
    And the todo form should match the default baseline

  Scenario: Ripple loading test
    Given user has opened the home page
    Then the ripple loading should match the default baseline
