import java.text.DateFormat;
import java.text.SimpleDateFormat;

import java.util.*;

class Person {
	String ssn;
	Date dateOfBirth;
	String firstName;
	String lastName;
	Double heightIn;
	Double weightLb;
	
	public Person(
		String ssn, 
		Date dob,
		String fn,
		String ln,
		Double hIn,
		Double wLb) 
	{
		this.ssn = ssn;
		dateOfBirth = dob;
		firstName = fn;
		lastName = ln;
		heightIn = hIn;
		weightLb = wLb;
	}
	
	void print() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		System.out.println(String.format(
			"Name: %s %s, SSN: %s, DOB: %s, Weight: %f lb, height: %f inches", 
			firstName, lastName, ssn, dateFormat.format(dateOfBirth), weightLb, heightIn)
		);
	}
	
	static List<Person> sort(Iterable<Person> people, String sortField, String ascending) {
		List<Person> sortedPeople = new ArrayList<Person>();
		people.forEach(person -> sortedPeople.add(person));
		Collections.sort(sortedPeople, new PersonComparator(sortField, ascending));
		return sortedPeople;
	}
}
