import {expect, test} from "bun:test"
import { fixSlackText } from "./fix-slack-text";

test("fixSlackText", ()=>{
    const slackText = 
`Datum;Dauer (h);Task;Person;Rapportiert am
07.08.2024;6;"Backend migrieren am 7.";
@patrik
;kA
07.08.2024;5.83;"Dienste in unsere Umgebung umziehen";
@romix
;kA
08.08.2024;6;"Backend nach Kubernetes migrieren";
@patrik
;kA
12.08.2024;0.5;"Besprechung Hosting mit Roman am 12.";
@patrik
;kA
12.08.2024;2;"B2B kurz überarbeiten und B2C für Kubernetes umbauen am 12.8.";
@romix
;kA
13.08.2024;1.5;"B2C für Kubernetes umbauen am 13.8.";
@romix
;kA
14.08.2024;0.67;"Frontends am 14.8.";
@romix
;kA
14.08.2024;4.5;"PIM migration";
@patrik
;kA
19.08.2024;1.5;"Hosting migrieren, Korrespondenz am 19.";
@patrik
;kA
20.08.2024;5;"Kubernetes Migration am 20.";
@patrik
;kA
21.08.2024;1;"Kubernetes Migration am 21.";
@patrik
;kA
27.08.2024;1;"Statische IP-Adresse für E-Mail Versand am 27.";
@patrik
;kA
28.08.2024;1.5;"Statische IP-Adresse für E-Mail Versand am 28.";
@patrik
;kA
;37;"Total";kA;kA`;

    expect(fixSlackText(slackText)).toBe(
`Datum;Dauer (h);Task;Person;Rapportiert am
07.08.2024;6;"Backend migrieren am 7.";@patrik;kA
07.08.2024;5.83;"Dienste in unsere Umgebung umziehen";@romix;kA
08.08.2024;6;"Backend nach Kubernetes migrieren";@patrik;kA
12.08.2024;0.5;"Besprechung Hosting mit Roman am 12.";@patrik;kA
12.08.2024;2;"B2B kurz überarbeiten und B2C für Kubernetes umbauen am 12.8.";@romix;kA
13.08.2024;1.5;"B2C für Kubernetes umbauen am 13.8.";@romix;kA
14.08.2024;0.67;"Frontends am 14.8.";@romix;kA
14.08.2024;4.5;"PIM migration";@patrik;kA
19.08.2024;1.5;"Hosting migrieren, Korrespondenz am 19.";@patrik;kA
20.08.2024;5;"Kubernetes Migration am 20.";@patrik;kA
21.08.2024;1;"Kubernetes Migration am 21.";@patrik;kA
27.08.2024;1;"Statische IP-Adresse für E-Mail Versand am 27.";@patrik;kA
28.08.2024;1.5;"Statische IP-Adresse für E-Mail Versand am 28.";@patrik;kA
;37;"Total";kA;kA`)
})


