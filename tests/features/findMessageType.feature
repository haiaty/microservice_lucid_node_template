Feature: Find message type from XMl payload


  Scenario: 1) Find message type of pain.001.001.09
    Given an XML of type 'pain.001.001.09' found here 'xml/001.001.09.xml'
    When I run the FindMessageType operation
    Then it must receive the message 'pain.001.001.09'


  Scenario: 2) Unknown message when xml not valid
    Given an XML of type 'notvalid' found here 'xml/not.valid.xml'
    When I run the FindMessageType operation
    Then it must receive the message 'UNKNOWN'