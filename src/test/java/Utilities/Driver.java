package Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

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

                default:
                    WebDriverManager.chromedriver().setup();

                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--window-size=1400,2400"); //width, height

                    threadDriver.set( new ChromeDriver(options) ); // evet bu jenkins için , diğer durumlarda bu kaldırılabilirr, direk intellij den çalıştırıken
                    break;
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