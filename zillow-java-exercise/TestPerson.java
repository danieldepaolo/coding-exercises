import java.util.Date;
import java.util.List;
import java.util.ArrayList;

/*
	Uses Java 10 instead of 8. This was what was available when I was grabbing the JDK.
*/

public class TestPerson {
    public static void main(String[] args) {
		Person bestFriend = new Person("154-34-9313", new Date(130973170000L), "John", "Montana", 68.4, 181.4);
		Person bestFriend2 = new Person("156-31-4313", new Date(603235018000L), "Joana", "Wellick", 64.0, 118.5);
		Person bestFriend3 = new Person("451-65-7834", new Date(659395018000L), "Elliot", "Alderson", 69.0, 155.0);
		Person bestFriend4 = new Person("415-13-3920", new Date(133305418000L), "Henry", "Deaver", 70.0, 168.1);

		List<Person> people = new ArrayList<Person>();
		people.add(bestFriend);
		people.add(bestFriend2);
		people.add(bestFriend3);
		people.add(bestFriend4);
		
		System.out.println("\n==Original order==");
		people.forEach(person -> person.print());
		
		sortAndPrintResults(people, "dateOfBirth", "true");
		sortAndPrintResults(people, "ssn", "false");
		sortAndPrintResults(people, "lastName", "true");
		sortAndPrintResults(people, "weightLb", "false");
    }
	
	public static void sortAndPrintResults(List<Person> people, String sortField, String asc) {
		List<Person> sortedPeople = Person.sort(people, sortField, asc);
		System.out.println(String.format("\n==Sorted by: %s, order: %s==", sortField, asc == "false" ? 
		"descending" : "ascending"));
		sortedPeople.forEach(person -> person.print());
	}
}
