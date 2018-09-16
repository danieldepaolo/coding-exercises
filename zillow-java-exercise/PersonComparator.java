import java.util.*;

class PersonComparator implements Comparator<Person> {
	String sortField;
	Boolean ascending;
	
	public PersonComparator(String sortField, String asc) {
		this.sortField = sortField;
		this.ascending = (asc == "false" ? false : true);
	}
	
	// This method of sorting based on field should be very fast
	// Using a switch statement it can quickly determine what compare logic to use
    @Override
    public int compare(Person a, Person b) {
		int returnVal = 0;
		switch(this.sortField) {
			case "weightLb": returnVal = a.weightLb < b.weightLb ? -1 : 1;
				break;
			case "heightIn": returnVal = a.heightIn < b.heightIn ? -1 : 1;
				break;
			case "lastName": returnVal = a.lastName.compareToIgnoreCase(b.lastName);
				break;
			case "firstName": returnVal = a.firstName.compareToIgnoreCase(b.firstName);
				break;
			case "dateOfBirth": returnVal = a.dateOfBirth.compareTo(b.dateOfBirth);
				break;
			case "ssn": returnVal = a.ssn.compareTo(b.ssn);
				break;
			default: returnVal = a.lastName.compareToIgnoreCase(b.lastName);
				break;
		}
		
		// Since the return value is just -1, 0, or 1, we can just flip it if we
		// actually wanted descending.
		return this.ascending ? returnVal : returnVal * -1;
    }
}