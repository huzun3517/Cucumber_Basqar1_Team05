package Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;

public class Driver {

    private static ThreadLocal<WebDriver> threadDriver=new ThreadLocal<>();
    public static ThreadLocal<String> threadBrowserName=new ThreadLocal<>();

    public static WebDriver getDriver()
    {
        if (threadBrowserName.get()==null)
        {
            threadBrowserName.set("chrome");
        }


        if (threadDriver.get() == null)
        {
            switch (threadBrowserName.get())
            {
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    threadDriver.set( new FirefoxDriver() );
                    break;

                case "opera":
                    WebDriverManager.operadriver().setup();
                    threadDriver.set(new OperaDriver());
                    break;

                case "edge":
                    WebDriverManager.edgedriver().setup();
                    threadDriver.set(new EdgeDriver());
                    break;

                default:
                    WebDriverManager.chromedriver().setup();
                    threadDriver.set( new ChromeDriver() ); // evet bu jenkins için , diğer durumlarda bu kaldırılabilirr, direk intellij den çalıştırıken
                    break;



        //     todo   Jetkins de calıştırmak icin aşagidaki yorumu açmalısın. Not: Yorumu açınca İntellij de run edildiğinde testleri browser olmadan yapıyor.

        /*
                     default:
                    WebDriverManager.chromedriver().setup();

                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--window-size=1400,2400"); //width, height

                    threadDriver.set( new ChromeDriver(options) );
                    break;
        */


            }
        }
        return threadDriver.get();
    }

    public static void quitDriver()
    {
        if (threadDriver.get() != null)
        {
            threadDriver.get().quit();
            WebDriver driver=threadDriver.get(); // threadLocl deki ilgili driverının referansı alındı.
            driver=null;
            threadDriver.set(driver);
        }
    }
}