package fundamentos;

//import java.util.Scanner;

public class Wrappers {

	public static void main(String[] args) {

		// Scanner entrada = new Scanner(System.in);

		Byte b = 100;
		Short s = 1000;
		Integer i = 10000;
		// Integer.parseInt(entrada.next());
		Long l = 100000L;
		Boolean bo = Boolean.parseBoolean("True");
		Character c = '#'; //char
		Float f = 123.10F;
		Double d = 1234.5678;
		var v = 15;

		System.out.println(b.byteValue());
		System.out.println(s.toString());
		System.out.println(i * 3);
		System.out.println(l / 3);
		System.out.println(bo);
		System.out.println(c + "...");
		System.out.println(f);
		System.out.println(d);
		System.out.println(v);

		// entrada.close();
	}

}
