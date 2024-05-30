function handleSubmit(event) {
    const form = document.getElementById('contact-form');
    const subject = encodeURIComponent(form.subject.value);
    const body = encodeURIComponent(
        'Nom: ' + form.nom.value + '\n' +
        'Prenom: ' + form.prenom.value + '\n' +
        'Adresse mail: ' + form.email.value + '\n' +
        'date de naissance: ' + form.date.value + '\n' +
        'Formations souhaitées: ' + form.annee.value + '\n' +
        'Actuellement, vous êtes : ' + form.statut.value + '\n' + // Correction du nom de l'élément
        'Langues parlées: ' + Array.from(form.langues).filter(langue => langue.checked)
            .map(langue => langue.value).join(',') + '\n\n'
    )
      }
      'demande : \n${ form.demande.value}

     window.location.href = 'mailto:ebtissem.sassi@univ-ubs.fr?subject =${subject} &body=${body}';

    





