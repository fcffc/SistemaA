package br.com.ted.dsa.sistemaa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", glue = { "br.com.ted.dsa.sistemaa.stepdefination" }, plugin = { "html:report/cucumber-html-report" })
public class TestRunner {

}
