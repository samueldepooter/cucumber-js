Feature: Is there cheese?
  Everybody wants to know if there's cheese

  Scenario: Finding some cheese
    Given I am on the Google search page
    When I search for "Cheese!"
    And I wait for "2" seconds
    Then the page title should start with "cheese"

  Scenario Outline: Finding some titles
    Given I am on the Google search page
    When I search for "<name>"
    And I wait for "1" seconds
    Then the page title should start with "<title>"

    Examples:
      | name          | title    |
      | November Five | November |
      | Gherkin       | Gherkin  |
